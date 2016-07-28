library(RODBC)

rm(list = ls())


dbc <-
  odbcDriverConnect(
    "driver=SQL Server;server=172.16.183.214;database=Paakoob;uid=RUser;pwd=x2mf3Oi7COZ8"
  )


folders <- dir(pattern = '^\\d{3}\\_')


sqlQuery(dbc, 'delete from dbo.Images')

id = 0


for (i in 1:length(folders)) {
  temp <- strsplit(folders[i], '_')[[1]]
  
  
  if (length(sqlQuery(
    dbc,
    paste(sep = '', 'select 1 from dbo.Trail where ID = ', as.numeric(temp[1]))
  )) == 1) {
    thumbnail = dir(path = paste(folders[i], '/Thumbnail', sep = ''))[1]
    
    
    
    thumbnail = paste(sep = '', folders[i], '/Thumbnail/', thumbnail)
    
    
    
    sqlQuery(
      dbc,
      paste(
        sep = '',
        'update dbo.Trail set Thumbnail = \'',
        thumbnail,
        '\' where ID = ',
        as.numeric(temp[1])
      )
    )
    
    
    files = dir(path = paste(sep = '', './', folders[i]),
                pattern = '[^\\.R|\\.db|\\.ini]$')
    
    files = files[files != 'Thumbnail']
    
    
    for (file in files) {
      id = id + 1
      
      sqlQuery(
        dbc,
        paste(
          sep = '',
          'insert into dbo.Images(ID, ID_Trail, Path) values(',
          id,
          ',',
          as.numeric(temp[1]),
          ',\'',
          folders[i],
          '/',
          file,
          '\')'
        )
      )
      
    }
    
  }
}

odbcClose(dbc)