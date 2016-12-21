$(function () {
    var href = location.href;
    $("ul.XCLMenu li").each(function () {
        if (new RegExp($(this).attr("activeReg")).test(href)) {
            $(this).addClass("XCLMenuActive");
        }
    });

    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
        //hljs.lineNumbersBlock(block);
    });
    
    $("img.lazy").lazyload({ effect: "fadeIn" });

    var resizeArticleImages = function () {
        var $imgs = $(".XCLArticleContent img"), $node = null;
        $imgs.removeClass("XCLResizeImage");
        $imgs.each(function (idx, n) {
            $node = $(n);
            if ($node.width() >= $node.parent().width()) {
                $node.addClass("XCLResizeImage");
            }
        });
    };
    
    $(window).on("resize", function () {
        resizeArticleImages();
    });
    resizeArticleImages();
});