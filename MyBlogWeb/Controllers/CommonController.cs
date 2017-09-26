using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyBlogWeb.Controllers
{
    public class CommonController : BaseController
    {
        /// <summary>
        /// 自定义错误页
        /// </summary>
        /// <param name="id">错误代码</param>
        /// <returns></returns>
        public ActionResult Error(int? id)
        {
            var viewModel = new XCLNetTools.Message.MessageModel();
            viewModel.ErrorCode = id.Value.ToString();

            if (id == 404)
            {
                viewModel.Message = "您访问的页面不存在哦！";
            }

            return View("~/Views/Common/Error.cshtml", viewModel);
        }

        /// <summary>
        /// 搜索和导航
        /// </summary>
        public ActionResult So()
        {
            var viewModel = new Models.Common.SoVM();
            viewModel.Key = XCLNetTools.StringHander.FormHelper.GetString("q");
            ViewBag.IsShowHeader = false;
            ViewBag.IsNeedAngular = true;
            ViewBag.IsNeedBaiduSug = true;
            ViewBag.Title = "导航搜索";
            return View(viewModel);
        }

        public ActionResult Ctrip()
        {
            return View();
        }
    }
}