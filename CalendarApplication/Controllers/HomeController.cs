using CalendarApplication.ModelBuilder;
using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Web.Mvc;

namespace CalendarApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHomePageModelBuilder _homePageModelBuilder;
        public HomeController(IHomePageModelBuilder homePageModelBuilder)
        {
            _homePageModelBuilder = homePageModelBuilder;
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("login")]
        public ActionResult Login(LoginRequestDTO loginRequest)
        {
            var result = _homePageModelBuilder.GetModel(loginRequest);

            return View();
        }

    }
}