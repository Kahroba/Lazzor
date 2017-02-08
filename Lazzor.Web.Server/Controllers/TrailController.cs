using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Lazzor.Web.Server.Controllers
{
    public class TrailController: ApiController
    {

        [HttpPost]
        public IHttpActionResult GetById(IdParam input)
        {
            return Ok(new Data.LazzorRepository().GetById(input.id.Value));
        }
        //public HttpResponseMessage Search(IdParam input)
        //{
        //    var result = new Data.LazzorRepository().GetById(input.id.Value);
        //    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
        //    //response.Content = new StringContent("hello", Encoding.Unicode);
        //    return response;
        //}
    }

    public class IdParam
    {
        public int? id { get; set; }
    }

}
