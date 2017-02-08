using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lazzor.Data.Models
{
    public class Map
    {
        public Map(TrailMap_RawResult raw)
        {
            Title = raw.Title;
            Url = raw.URL;
            Scale = (int)raw.Scale.GetValueOrDefault();
        }
        public string Title { get; set; }
        public string Url { get; set; }
        public int Scale { get; set; }
    }
}
