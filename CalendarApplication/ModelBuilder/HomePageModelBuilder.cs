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
    public class HomePageModelBuilder
    {
        public HomePageModel GetModel()
        {
            var model = new HomePageModel();

            model.Valid = Task.Run(async () => await IsUserValidAsync()).GetAwaiter().GetResult();

            return model;
        }

        private async Task<bool> IsUserValidAsync()
        {
            var client = new LoginClient();

            var request = new LoginRequestDTO { UserName = "Solufemi91", Password = "Password" };

            var result = await client.PostValidUserAsync(request);

            return result;
        }
    }
}