using Lazzor.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace Lazzor.Data
{
    public class LazzorRepository
    {
        LazzorDbContext _dbContext;

        public LazzorRepository()
        {
            _dbContext = new LazzorDbContext();
        }

        public IEnumerable<SearchResult> Search(string phrase)
        {
            return _dbContext.SearchTrails(phrase).ToList().Select(r => new SearchResult(r));
        }

        public Trail GetById(int id)
        {
            var result = _dbContext.GetTrailById(id).Select(r => new Trail(r)).Single();
            result.Images = GetTrailImages(id);
            result.Maps = GetTrailMaps(id);
            result.NearbyTrails = GetNearbyTrails(id);
            return result;
        }

        public IEnumerable<string> GetTrailImages(int trailId)
        {
            return _dbContext.GetTrailImages(trailId).Select(i => i.ImageUrl).ToList();
        }

        public IEnumerable<Map> GetTrailMaps(int trailId)
        {
            return _dbContext.GetTrailMaps(trailId).Select(i => new Map(i)).ToList();
        }

        public IEnumerable<NearbyTrail> GetNearbyTrails(int trailId)
        {
            return _dbContext.GetNearbyTrails(trailId).Select(i => new NearbyTrail(i)).ToList();
        }

    }
}
