using System.Web.Mvc;
using System.Web.Routing;

namespace MyBlogWeb
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "PagerRouter",
                url: "{controller}/{action}/t{ArticleType}/p{page}",
                defaults: new { controller = "Article", action = "Index", ArticleType = 0, page = 1 },
                constraints: new { ArticleType = @"^\d+$", page = @"^\d+$" }
            );

            routes.MapRoute(
                name: "SoRouter",
                url: "{controller}/{action}/{key}",
                defaults: new { key = string.Empty },
                constraints: new { controller = "Common", action = "So" }
            );

            routes.MapRoute(
                name: "DefaultRouter",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Article", action = "Index", id = UrlParameter.Optional },
                constraints: new { id = @"^(\d+)?$" }
            );
        }
    }
}