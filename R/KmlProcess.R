rm(list = ls());
library(XML);
library(geosphere);
library(RODBC);


dbc <-
  odbcDriverConnect(
    "driver=SQL Server;server=172.16.183.214;database=Paakoob;uid=RUser;pwd=x2mf3Oi7COZ8"
  );



files = dir(pattern = '[^\\.R|\\.Rhistory]$');

for(ii in 1:length(files)) {
# ii = 1;


xmlFile <- xmlParse(file = files[ii]);

tracks <- xpathSApply(
  xmlFile,
  '/x:kml/x:Document/x:Folder[@id = "Tracks"]/x:Placemark/x:MultiGeometry/x:LineString/x:coordinates/text()',
  xmlValue,
  namespaces = 'x'
);

tracks_name <-
  xpathSApply(
    xmlFile,
    '/x:kml/x:Document/x:Folder[@id = "Tracks"]/x:Placemark/x:name/text()',
    xmlValue,
    namespaces = 'x'
  );

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


A <- as.matrix(trackData[1:(nrow(trackData)-1), 1:2]);
B <- as.matrix(trackData[2:nrow(trackData), 1:2]);

C = distVincentyEllipsoid(
  p1 = A,
  p2 = B,
  a = 6378137,
  b = 6356752.3142,
  f = 1 / 298.257223563
);

trackData$distance = c(0,C);
trackData$totalDistance = cumsum(trackData$distance);

#ellipsoid             a              b                f
#WGS84                 6378137        6356752.3142     1/298.257223563

# plot(trackData$totalDistance, trackData$elevation, type = 'l')

str <- paste(as.character(trackData$totalDistance), as.character(trackData$elevation), sep = ',');
str <- paste(str, collapse = ' ');

id <- strsplit(files[ii], '_')[[1]][1];
id <- as.integer(id);
kmlStr <- readChar(files[ii], file.info(files[ii])$size);
kmlStr <- gsub("\\'", "\\'\\'", kmlStr);
str <- gsub("\\'", "\\'\\'", str);

sqlQuery(dbc,
    paste(sep = '',
         'update dbo.Trail set KmlInfo = \'',
         kmlStr,
         '\', ElevationProfile = \'',
         str,
         '\' where ID = ',
         id
    )
  );

print(files[ii]);
}

odbcClose(dbc)
