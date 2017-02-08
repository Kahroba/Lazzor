using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Lazzor.Web.Server.Controllers
{
    public class HomeController : ApiController
    {

        [HttpPost]
        public IHttpActionResult Search(SearchParam input)
        {
            return Ok(new Data.LazzorRepository().Search(input.q));
        }
        //public HttpResponseMessage Search(SearchParam input)
        //{
        //    var result = new Data.LazzorRepository().Search(input.q);
        //    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
        //    //response.Content = new StringContent("hello", Encoding.Unicode);
        //    return response;
        //}
    }

    public class SearchParam
    {
        public string q { get; set; }
    }

}
