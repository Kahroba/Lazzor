﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Lazzor.Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class LazzorDbContext : DbContext
    {
        public LazzorDbContext()
            : base("name=LazzorDbContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual ObjectResult<Trail_RawResult> GetTrailById(Nullable<long> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Trail_RawResult>("GetTrailById", iDParameter);
        }
    
        public virtual ObjectResult<SearchItem_RawResult> SearchTrails(string phrase)
        {
            var phraseParameter = phrase != null ?
                new ObjectParameter("Phrase", phrase) :
                new ObjectParameter("Phrase", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SearchItem_RawResult>("SearchTrails", phraseParameter);
        }
    
        public virtual ObjectResult<TrailImage_RawResult> GetTrailImages(Nullable<long> trailId)
        {
            var trailIdParameter = trailId.HasValue ?
                new ObjectParameter("trailId", trailId) :
                new ObjectParameter("trailId", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<TrailImage_RawResult>("GetTrailImages", trailIdParameter);
        }
    
        public virtual ObjectResult<NearbyTrail_RawResult> GetNearbyTrails(Nullable<long> iD_Trail)
        {
            var iD_TrailParameter = iD_Trail.HasValue ?
                new ObjectParameter("ID_Trail", iD_Trail) :
                new ObjectParameter("ID_Trail", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<NearbyTrail_RawResult>("GetNearbyTrails", iD_TrailParameter);
        }
    
        public virtual ObjectResult<TrailMap_RawResult> GetTrailMaps(Nullable<long> iD_Trail)
        {
            var iD_TrailParameter = iD_Trail.HasValue ?
                new ObjectParameter("ID_Trail", iD_Trail) :
                new ObjectParameter("ID_Trail", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<TrailMap_RawResult>("GetTrailMaps", iD_TrailParameter);
        }
    }
}