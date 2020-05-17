using CalendarApplication.Models;
using LoginApiClientV3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalendarApplication.ModelBuilder
{
    public interface IUserHomePageModelBuilder
    {
        UserHomePageModel GetModel(int? id);

    }
}
