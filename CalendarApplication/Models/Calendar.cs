using CalenderApiClient.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CalendarApplication.Models
{
    public class Calendar
    {
        public List<string> DaysOfTheWeek { get; set; } = new List<string> { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

        public List<YearDTO> Years { get; set; }
    }

    //public class Year
    //{
    //    public List<Month> Months { get; set; }
    //}

    //public class Month
    //{
    //    public List<Week> Weeks { get; set; }
    //}

    //public class Week
    //{
    //    public List<int> Days { get; set; }
    //}
}