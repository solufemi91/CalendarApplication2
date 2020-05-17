using CalendarApplication.ModelBuilder;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;


namespace CalendarApplication.Installers
{
    public class ModelBuilderInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                .Where(Component.IsInSameNamespaceAs<UserHomePageModelBuilder>())
                .WithService.DefaultInterfaces()
                .LifestyleTransient());
        }
    }
}