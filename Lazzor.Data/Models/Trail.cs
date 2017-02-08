using System.Collections.Generic;

namespace Lazzor.Data.Models
{
    public class Trail
    {
        public Trail(Trail_RawResult raw)
        {
            Id = raw.ID;
            Name = raw.Name;
            DepartureCity = raw.City_From;
            DepartureCityPath = raw.City_From_Path;
            Description = raw.Description;
            DifficultyLevel = raw.Difficulty_Level.Value;
            DifficultyTitle = raw.Difficulty_Name;
            Duration = raw.Duration.Value;
            ElevationProfile = raw.ElevationProfile;
            Length = raw.Length;
            Season = raw.Season;
            ThumbnailPath = raw.Thumbnail;
            KmlPath = raw.KmlPath;
            SosService = raw.SOSService;
            StreetViewUrl = raw.StreetViewURL;
            VirtualTourUrl = raw.VirtualTour;
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string DepartureCity { get; set; }
        public string DepartureCityPath { get; set; }
        public int DifficultyLevel { get; set; }
        public string DifficultyTitle { get; set; }
        public long Duration { get; set; }
        public string ElevationProfile { get; set; }
        public long Length { get; set; }
        public string Season { get; set; }
        public string ThumbnailPath { get; set; }
        public string KmlPath { get; set; }
        public string SosService { get; set; }
        public string StreetViewUrl { get; set; }
        public string VirtualTourUrl { get; set; }
        public IEnumerable<string> Images { get; set; }
        public IEnumerable<Map> Maps { get; set; }
        public IEnumerable<NearbyTrail> NearbyTrails { get; set; }

    }
}
