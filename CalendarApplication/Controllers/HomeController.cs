using CalendarApplication.ModelBuilder;
using CalendarApplication.Models;
using CalendarApplication.Wrapper;
using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace CalendarApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUserHomePageModelBuilder _homePageModelBuilder;
        private readonly IAccountWrapper _accountWrapper;

        public HomeController(IUserHomePageModelBuilder homePageModelBuilder, IAccountWrapper accountWrapper)
        {
            _homePageModelBuilder = homePageModelBuilder;
            _accountWrapper = accountWrapper;
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginRequestDTO loginRequest)
        {
            var test = "test";
            var result = _accountWrapper.PostValidUser(loginRequest);

            return RedirectToAction("userHomePage", "home", new { id = result?.LoginDetailsID });
        }

        [HttpPost]
        public JsonResult UpdateBooking(FormDataRequestDTO formData)
        {
            var result = _accountWrapper.UpdateBookingAsync(formData);

            var jsonResult = new JsonResult();

            jsonResult.Data = result;

            return jsonResult;
        }

        [HttpGet]
        public ActionResult UserHomePage(int? id)
        {
            if(id == null)
            {
                return RedirectToAction("index", "home");
            }
            else {

                var model = _homePageModelBuilder.GetModel(id);
                return View(model);
            }
                      
        }

    }
}