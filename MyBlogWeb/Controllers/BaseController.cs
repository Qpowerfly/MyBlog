using System;
using System.Linq;
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
                var request = XCLCMS.Lib.WebAPI.Library.CreateRequest<XCLCMS.Data.WebAPIEntity.RequestEntity.Open.LogonCheckEntity>(null);
                request.Body = new XCLCMS.Data.WebAPIEntity.RequestEntity.Open.LogonCheckEntity();
                request.Body.UserName = XCLNetTools.XML.ConfigClass.GetConfigString("MainUserName");
                request.Body.Pwd = XCLNetTools.XML.ConfigClass.GetConfigString("MainPwd");
                var response = XCLCMS.Lib.WebAPI.OpenAPI.LogonCheck(request);
                return response?.Body?.Token;
            }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            ViewBag.MainUserToken = this.MainUserToken;
            ViewBag.IsNeedHighlight = false;
            ViewBag.IsNeedAngular = false;

            //获取文章分类
            var request = XCLCMS.Lib.WebAPI.Library.CreateRequest<long>(this.MainUserToken);
            request.Body = XCLNetTools.XML.ConfigClass.GetConfigInt("ArticleTypeRootID");
            var response = XCLCMS.Lib.WebAPI.SysDicAPI.GetAllUnderListByID(request);
            ViewBag.TypeList = response?.Body?.Where(k => k.IsLeaf == 1).OrderByDescending(k => k.Sort).ToList();
        }
    }
}