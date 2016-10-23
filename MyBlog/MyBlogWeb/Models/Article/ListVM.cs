using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyBlogWeb.Models.Article
{
    /// <summary>
    /// 文章列表
    /// </summary>
    public class ListVM
    {
        public XCLNetTools.Entity.PagerInfo PagerModel { get; set; }

        public List<XCLCMS.Data.Model.View.v_Article> ArticleList { get; set; }
    }
}
