using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace MyBlogWeb.Controllers
{
    public class ArticleController : BaseController
    {
        public ActionResult Index(int? page, long? articleType)
        {
            var viewModel = new MyBlogWeb.Models.Article.ListVM();
            base.PageParamsInfo.PageSize = 10;
            base.PageParamsInfo.PageIndex = page ?? 1;

            var request = XCLCMS.Lib.WebAPI.Library.CreateRequest<XCLCMS.Data.WebAPIEntity.RequestEntity.Article.SimplePageListEntity>(base.MainUserToken);
            request.Body = new XCLCMS.Data.WebAPIEntity.RequestEntity.Article.SimplePageListEntity()
            {
                PageInfo = base.PageParamsInfo,
                Condition = new XCLCMS.Data.Model.Custom.ArticleSearchCondition()
                {
                    ArticleTypeIDList = new List<long>() { articleType.GetValueOrDefault() },
                    ArticleState = XCLCMS.Data.CommonHelper.EnumType.ArticleStateEnum.PUB.ToString(),
                    RecordState = XCLCMS.Data.CommonHelper.EnumType.RecordStateEnum.N.ToString(),
                    VerifyState = XCLCMS.Data.CommonHelper.EnumType.VerifyStateEnum.YES.ToString(),
                    MerchantID = base.CurrentApplicationMerchant.MerchantID,
                    MaxPublishTime = DateTime.Now
                }
            };
            var response = XCLCMS.Lib.WebAPI.ArticleAPI.SimplePageList(request).Body ?? new XCLCMS.Data.WebAPIEntity.ResponseEntity.PageListResponseEntity<XCLCMS.Data.Model.View.v_Article>();
            viewModel.ArticleList = response.ResultList ?? new List<XCLCMS.Data.Model.View.v_Article>();
            viewModel.PagerModel = response.PagerInfo ?? new XCLNetTools.Entity.PagerInfo(1, 1, 0);

            return View(viewModel);
        }

        public ActionResult Show(long? id)
        {
            if (!id.HasValue)
            {
                return RedirectToAction("Index");
            }

            //查询当前文章
            var request = XCLCMS.Lib.WebAPI.Library.CreateRequest<long>(base.MainUserToken);
            request.Body = id.Value;
            var response = XCLCMS.Lib.WebAPI.ArticleAPI.Detail(request) ?? new XCLCMS.Data.WebAPIEntity.APIResponseEntity<XCLCMS.Data.Model.View.v_Article>();
            if (null == response || null == response.Body)
            {
                Response.StatusCode = 404;
                Response.TrySkipIisCustomErrors = true;
            }

            //查询相关文章
            var relationRequest = XCLCMS.Lib.WebAPI.Library.CreateRequest<long>(base.MainUserToken);
            relationRequest.Body = id.Value;
            var relationResponse = XCLCMS.Lib.WebAPI.ArticleAPI.RelationDetail(relationRequest) ?? new XCLCMS.Data.WebAPIEntity.APIResponseEntity<XCLCMS.Data.Model.Custom.ArticleRelationDetailModel>();
            
            var viewModel = new MyBlogWeb.Models.Article.ShowVM();
            viewModel.Article = response.Body ?? new XCLCMS.Data.Model.View.v_Article();
            viewModel.RelationDetail = relationResponse.Body ?? new XCLCMS.Data.Model.Custom.ArticleRelationDetailModel();
            
            if (!string.IsNullOrWhiteSpace(ViewBag.Title))
            {
                ViewBag.Title = string.Format("{0}—{1}", viewModel.Article.Title, ViewBag.Title);
            }

            ViewBag.IsNeedHighlight = true;

            //广告信息
            var adsRequest = XCLCMS.Lib.WebAPI.Library.CreateRequest<string>(base.MainUserToken);
            adsRequest.Body = "ABC_ArticleShowBottom";
            var adsResponse = XCLCMS.Lib.WebAPI.AdsAPI.DetailByCode(adsRequest);
            viewModel.AdsBottomCode = adsResponse?.Body?.Contents;

            ViewBag.KeyWords = viewModel.Article.KeyWords;
            ViewBag.Description = viewModel.Article.Summary;

            return View(viewModel);
        }
    }
}