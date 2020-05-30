using CalendarApplication.Models;
using CalendarApplication.Wrapper;
using CalenderApiClient;
using CalenderApiClient.DTOs;
using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace CalendarApplication.ModelBuilder
{
    public class UserHomePageModelBuilder : IUserHomePageModelBuilder
    {
        private readonly IAccountWrapper _accountWrapper;

        public UserHomePageModelBuilder(IAccountWrapper accountWrapper)
        {
            _accountWrapper = accountWrapper;
        }

        public UserHomePageModel GetModel(int? id)
        {
            var result = _accountWrapper.GetBookingDetailsAsync(id).ToList();
            var model = new UserHomePageModel
            {
                FirstName = result.FirstOrDefault().FirstName,
                LastName = result.FirstOrDefault().LastName,
                BookingDetails = result
            };
           
            return model;
        }
    }
}