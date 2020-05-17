using LoginApiClientV3;
using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace CalendarApplication.Wrapper
{
    public class AccountWrapper : IAccountWrapper
    {
        private readonly ILoginClient _loginClient;
        public AccountWrapper(ILoginClient loginClient)
        {
            _loginClient = loginClient;
        }

        public LoginResponseDTO PostValidUser(LoginRequestDTO loginRequest)
        {
            var result = Task.Run(async () => await _loginClient.PostValidUserAsync(loginRequest)).GetAwaiter().GetResult();

            return result;
        }


        public IEnumerable<BookingDetailsDTO> GetBookingDetailsAsync(int? id)
        {
            var result = Task.Run(async () => await _loginClient.GetBookingDetailsAsync(id)).GetAwaiter().GetResult();

            return result;
        }
    }
}