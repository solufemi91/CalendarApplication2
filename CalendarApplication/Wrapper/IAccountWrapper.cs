using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalendarApplication.Wrapper
{
    public interface IAccountWrapper
    {
        LoginResponseDTO PostValidUser(LoginRequestDTO loginRequest);

        IEnumerable<BookingDetailsDTO> GetBookingDetailsAsync(int? id);
    }
}
