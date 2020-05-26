using CalenderApiClient;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using LoginApiClientV3;

namespace CalendarApplication.Installers
{
    public class ClientInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(
                Component.For<ILoginClient>().ImplementedBy<LoginClient>(),
                Component.For<ICalendarClient>().ImplementedBy<CalendarClient>());
        }
    }
}