using System;
using System.Web.Mvc;

namespace MyBlogWeb.Controllers
{
    /// <summary>
    /// 基类
    /// </summary>
    [XCLCMS.Lib.Filters.ExceptionFilter()]
    [XCLCMS.Lib.Filters.PermissionFilter(IsMustLogin = false)]
    public class BaseController : XCLCMS.Lib.Base.AbstractBaseController
    {
        /// <summary>
        /// 获取当前商户主账号token
        /// </summary>
        public string MainUserToken
        {
            get
            {
                var request = XCLCMS.Lib.WebAPI.Library.CreateRequest<XCLCMS.Data.Model.Custom.UserNamePwd>(null);
                request.Body = new XCLCMS.Data.Model.Custom.UserNamePwd()
                {
                    UserName = XCLNetTools.XML.ConfigClass.GetConfigString("MainUserName"),
                    Pwd = XCLNetTools.XML.ConfigClass.GetConfigString("MainPwd")
                };
                var response = XCLCMS.Lib.WebAPI.OpenAPI.CreateUserToken(request);
                return null == response ? string.Empty : Convert.ToString(response.Body);
            }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            ViewBag.MainUserToken = this.MainUserToken;
        }
    }
}