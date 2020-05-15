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
        public HomePageModel GetModel(LoginRequestDTO loginRequest)
        {
            var model = new HomePageModel();

            model.Valid = Task.Run(async () => await IsUserValidAsync(loginRequest)).GetAwaiter().GetResult();

            return model;
        }

        public async Task<bool> IsUserValidAsync(LoginRequestDTO loginRequest)
        {
            return await _loginClient.PostValidUserAsync(loginRequest);
        }
    }
}