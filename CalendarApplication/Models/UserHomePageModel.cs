using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CalendarApplication.Models
{
    public class UserHomePageModel
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public List<BookingDetailsDTO> BookingDetails { get; set; }

        public Calendar CalendarData { get; set; }
    }
}