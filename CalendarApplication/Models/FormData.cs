using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CalendarApplication.Models
{
    public class FormData
    {
        public string Date { get; set; }

        public DateTime ParsedDate => DateTime.Parse(Date);
        public string EventName { get; set; }
        public string Description { get; set; }

        public string Location { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }
    }
}