path <- 'D:\\PaakoobSiteCopy\\wwwroot\\assets\\maps'


fileList <- dir(path = path,
                recursive = TRUE,
                pattern = '^[^T]')
nf <- length(fileList)


data <-
  data.frame(
    Title = character(nf),
    Scale = numeric(nf),
    ID_Trail = numeric(nf),
    URL = character(nf)
  )



data$URL = fileList

data$ID_Trail = as.numeric(sapply(fileList, function(x) {
  strsplit(x, '_')[[1]][1]
}))

data$Scale = as.numeric(sapply(fileList, function(x) {
  a <- strsplit(x, '/')[[1]][2]
  b <- strsplit(a, '_')[[1]][1]
}))


data$Script = paste0(',(', data$Scale, ', ', data$ID_Trail, ', N\'', data$URL, '\')')



Script <- paste(data$Script, collapse = '\n')

Script <- substr(Script, 2, nchar(Script))

Script <- paste0(
  'begin tran;
  
  insert into dbo.Map(Title, ID_Trail, Scale, [URL])
  select
  (select top 1 Title from dbo.Map as MM where Temp.Scale = MM.Scale) as Title,
  Temp.ID_Trail, Temp.Scale, Temp.[URL] from (
  values ',
  Script,
  ') as Temp(Scale, ID_Trail, [URL])
  left join	dbo.Map as M
  on M.ID_Trail = Temp.ID_Trail and M.[URL] = Temp.[URL]
  where M.ID is null
  ;
  
  select * from dbo.Map
  
  --commit tran;'
  )

cat(Script, file = 'Script.sql');