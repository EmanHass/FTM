using FTMS.Data.DataLayer;
using FTMS.Infrastructure.AutoMapper;
using FTMS.Infrastructure.HelperServices.ImageHelper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace FTMS.Infrastructure.DataLayer
{
    public static class DependencyInjection
    {

        public static IServiceCollection AddDataLayer(this IServiceCollection services, ConfigurationManager configurationManager)
        {
            services.AddDbContext<FTMSDbContext>(options =>
            {
                options.UseSqlServer(configurationManager.GetConnectionString("DefaultConnection"));
            });

            services.AddDatabaseDeveloperPageExceptionFilter();

          

            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            //services.AddIdentity<User, IdentityRole>(config =>
            //{
            //    config.User.RequireUniqueEmail = true;
            //    config.Password.RequireDigit = false;
            //    config.Password.RequiredLength = 6;
            //    config.Password.RequireLowercase = false;
            //    config.Password.RequireNonAlphanumeric = false;
            //    config.Password.RequireUppercase = false;
            //    config.SignIn.RequireConfirmedEmail = true;
            //    config.SignIn.RequireConfirmedAccount = true;
            //    config.SignIn.RequireConfirmedAccount = true;
            //}).AddEntityFrameworkStores<FTMS>().AddDefaultUI()
            //    .AddDefaultTokenProviders();

            //  services.AddAutoMapper(typeof(MappingProfile).Assembly);
            services.AddScoped<IImageService, ImageService>();

            return services;

        }

        public static void AddDependencyInjection(this IServiceCollection services)
        {
            Assembly assembly = typeof(DependencyInjection).GetTypeInfo().Assembly;

            var allRepositroies = assembly.GetTypes().
                Where(type => type.Name.EndsWith("Repository")//Repository 
              );

            foreach (var repository in allRepositroies)
            {
                if (repository.IsGenericType) return;
                Console.WriteLine($"{repository.FullName} 1");
                var allInterface = repository.GetInterfaces();
                var mainInterFace = allInterface.Except(allInterface.SelectMany(i => i.GetInterfaces()));
                foreach (var iRepository in mainInterFace)
                {
                    if (iRepository.IsGenericType) return;
                    Console.WriteLine($"{iRepository.FullName} 2");
                    services.AddScoped(iRepository, repository);
                }
            }

        }
    }
}
