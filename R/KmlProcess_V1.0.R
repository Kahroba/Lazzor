rm(list = ls())

library(XML)

library(geosphere)

library(RODBC)



# dbc <-
#   odbcDriverConnect(
#     "driver=SQL Server;server=192.99.255.22;database=Paakoob;uid=dehbod;pwd=_s_now7"
#   )


#"driver=SQL Server;server=172.16.183.214;database=Paakoob;uid=RUser;pwd=x2mf3Oi7COZ8"
dbc <- odbcConnect('Local2012')


files = dir(path = './kml')



for (ii in 1:length(files)) {
  # ii = 6;
  
  
  xmlFile <- xmlParse(file = paste('./kml/', files[ii], sep = ''))
  
  
  
  tracks <- xpathSApply(
    xmlFile,
    '/x:kml/x:Document/x:Folder[@id = "Tracks"]/x:Placemark/x:MultiGeometry/x:LineString/x:coordinates/text()',
    xmlValue,
    namespaces = 'x'
  )
  
  
  tracks_name <-
    xpathSApply(
      xmlFile,
      '/x:kml/x:Document/x:Folder[@id = "Tracks"]/x:Placemark/x:name/text()',
      xmlValue,
      namespaces = 'x'
    )
  
  
  coordinates = strsplit(tracks[1], ' ')[[1]]
  
  coordinates = strsplit(coordinates, ',')
  
  
  trackData = data.frame(
    longitude = double(length(coordinates)),
    latitude = double(length(coordinates)),
    elevation = double(length(coordinates))
  )
  
  
  for (i in 1:length(coordinates)) {
    trackData$longitude[i] = as.double(coordinates[[i]][1])
    
    trackData$latitude[i] = as.double(coordinates[[i]][2])
    
    trackData$elevation[i] = as.double(coordinates[[i]][3])
    
  }
  
  trackData <- trackData[!is.na(trackData$elevation), ]
  
  
  A <- as.matrix(trackData[1:(nrow(trackData) - 1), 1:2])
  
  B <- as.matrix(trackData[2:nrow(trackData), 1:2])
  
  
  C = distVincentyEllipsoid(
    p1 = A,
    p2 = B,
    a = 6378137,
    b = 6356752.3142,
    f = 1 / 298.257223563
  )
  
  
  nPoints = nrow(trackData)
  
  
  trackData$distance = c(0, C)
  
  
  trackData$totalDistance = cumsum(trackData$distance)
  
  
  trackData$elevationDiff = 0
  
  
  trackData$elevationDiff[2:nPoints] <-
    trackData$elevation[2:nPoints] - trackData$elevation[1:(nPoints - 1)]
  
  
  minElv <- round(min(trackData$elevation))
  
  
  maxElv <- round(max(trackData$elevation))
  
  
  ascend <-
    round(sum(trackData$elevationDiff[trackData$elevationDiff > 0]))
  
  
  descend <-
    abs(round(sum(trackData$elevationDiff[trackData$elevationDiff < 0])))
  
  
  length <- round(max(trackData$totalDistance))
  
  
  #ellipsoid             a              b                f
  #WGS84                 6378137        6356752.3142     1/298.257223563
  
  # plot(trackData$totalDistance, trackData$elevation, type = 'l')
  
  str <-
    paste(as.character(trackData$totalDistance),
          as.character(trackData$elevation),
          sep = ',')
  
  str <- paste(str, collapse = ' ')
  
  
  id <- strsplit(files[ii], '_')[[1]][1]
  
  id <- as.integer(id)
  
  str <- gsub("\\'", "\\'\\'", str)
  
  
  
  # kmlStr <- readChar(files[ii], file.info(files[ii])$size);
  # kmlStr <- gsub("\\'", "\\'\\'", kmlStr);
  # if(substr(kmlStr, 1, 3) == ''){
  #   kmlStr <- substr(kmlStr, 4, nchar(kmlStr));
  # }
  
  # cat(kmlStr, file = paste('../KMLCorrected/',files[ii], sep = ''));
  
  
  kmlPath <- files[ii]
  
  
  queryStr <- paste(
    sep = '',
    'update dbo.Trail 
    set KmlPath = isnull(KmlPath,\'',
    kmlPath,
    '\')\n, ElevationProfile = isnull(ElevationProfile, \'',
    str,
    '\')\n, Length = isnull(Length, ',
    length,
    ')\n, Ascend = isnull(Ascend, ',
    ascend,
    ')\n, Descend = isnull(Descend, ',
    descend,
    ')\n, MinElevation = isnull(MinElevation, ',
    minElv,
    ')\n, MaxElevation = isnull(MaxElevation, ',
    maxElv,
    ')\n where ID = ',
    id
  )
  
  
  
  # sqlQuery(dbc,queryStr);
  cat(queryStr, file = paste('./SQL/', kmlPath, '.sql', sep = ''))
  
  
  
  print(files[ii])
  
}

odbcClose(dbc)
