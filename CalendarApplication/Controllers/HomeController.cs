using CalendarApplication.ModelBuilder;
using CalendarApplication.Models;
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
        public ActionResult Login(LoginRequestDTO loginRequest)
        {
            var result = _homePageModelBuilder.GetModel(loginRequest);


            return RedirectToAction("userHomePage", "home", new { isValid = result.Valid });
        }

        [HttpGet]
        public ActionResult UserHomePage(bool? isValid)
        {
            var model = new HomePageModel
            {
                Valid = isValid
            };

            return View(model);
        }

    }
}