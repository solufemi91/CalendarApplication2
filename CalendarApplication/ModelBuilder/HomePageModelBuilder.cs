using CalendarApplication.Models;
using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace CalendarApplication.ModelBuilder
{
    public class HomePageModelBuilder : IHomePageModelBuilder
    {
        private readonly ILoginClient _loginClient;
        public HomePageModelBuilder(ILoginClient loginClient)
        {
            _loginClient = loginClient;
        }
        public HomePageModel GetModel()
        {
            var model = new HomePageModel();

            model.Valid = Task.Run(async () => await IsUserValidAsync()).GetAwaiter().GetResult();

            return model;
        }

        public async Task<bool> IsUserValidAsync()
        {
            var request = new LoginRequestDTO { UserName = "Solufemi91", Password = "Password" };

            return await _loginClient.PostValidUserAsync(request);
        }
    }
}