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
                return XCLCMS.Lib.Login.LoginHelper.CreateUserToken(XCLNetTools.XML.ConfigClass.GetConfigString("MainUserName"), XCLNetTools.XML.ConfigClass.GetConfigString("MainPwd"));
            }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            ViewBag.MainUserToken = this.MainUserToken;
        }
    }
}