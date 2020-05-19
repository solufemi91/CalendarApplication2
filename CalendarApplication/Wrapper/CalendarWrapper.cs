using CalendarApplication.Models;
using CalenderApiClient;
using CalenderApiClient.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace CalendarApplication.Wrapper
{
    public class CalendarWrapper : ICalendarWrapper
    {
        private readonly ICalendarClient _calendarClient;
        public CalendarWrapper(ICalendarClient calendarClient)
        {
            _calendarClient = calendarClient;
        }
        public Calendar GetCurrentYearData()
        {
            var year = Task.Run(async () => await _calendarClient.GetCalendar(DateTime.Now.Year)).GetAwaiter().GetResult();

            var yearList = new List<YearDTO>();

            yearList.Add(year);

            var calendar = new Calendar
            {
                Years = yearList
            };

            return calendar;

        }
    }
}