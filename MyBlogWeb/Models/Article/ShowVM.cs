using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyBlogWeb.Models.Article
{
    public class ShowVM
    {
        public XCLCMS.Data.Model.View.v_Article Article { get; set; }

        public XCLCMS.Data.Model.Custom.ArticleRelationDetailModel RelationDetail { get; set; }
    }
}
