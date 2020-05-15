using CalendarApplication.ModelBuilder;
using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Web.Mvc;

namespace CalendarApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var result = new HomePageModelBuilder().GetModel();

            return View();
        }

        public ActionResult Home()
        {
            var result = new HomePageModelBuilder().GetModel();

            return View();
        }
    }
}