using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Mvc2Ang_routes_problem
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddMvc();
		}

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

			app.UseStaticFiles();

			app.UseMvc(routes =>
			{
				routes.MapRoute("default", "{*anything}", new { controller = "Home", action = "Index"});
			});

			app.Run(async (context) =>
            {
                await context.Response.WriteAsync("MVC: no endpoint found");
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
