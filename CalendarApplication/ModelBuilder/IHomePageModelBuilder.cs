using CalendarApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalendarApplication.ModelBuilder
{
    public interface IHomePageModelBuilder
    {
        HomePageModel GetModel();

        Task<bool> IsUserValidAsync();
    }
}
