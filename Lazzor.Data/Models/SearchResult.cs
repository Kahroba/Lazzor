namespace Lazzor.Data.Models
{
    public class SearchResult
    {
        public SearchResult(SearchItem_RawResult raw)
        {
            Id = raw.ID;
            Name = raw.Name;
            DepartureCity = raw.City_From;
            DepartureCityPath = raw.City_From_Path;
            DifficultyLevel = raw.Difficulty_Level.Value;
            DifficultyTitle = raw.Difficulty_Name;
            Duration = raw.Duration.Value;
            Length = raw.Length;
            Season = raw.Season;
            ThumbnailPath = raw.Thumbnail;
        }

        public string DepartureCity { get; set; }
        public string DepartureCityPath { get; set; }
        public int DifficultyLevel { get; set; }
        public string DifficultyTitle { get; set; }
        public long Duration { get; set; }
        public long Id { get; set; }
        public long Length { get; set; }
        public string Name { get; set; }
        public string Season { get; set; }
        public string ThumbnailPath { get; set; }
    }
}
