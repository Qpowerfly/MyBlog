<?xml version="1.0" encoding="utf-8" ?>
<appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />

    <!--应用号-->
    <add key="AppID" value="${config.AppID}" />
    <add key="AppKey" value="${config.AppKey}" />
    <!--文章分类根节点ID-->
    <add key="ArticleTypeRootID" value="${config.ArticleTypeRootID}" />
    <!--商户主账号用户名-->
    <add key="MainUserName" value="${config.MainUserName}" />
    <!--商户主账号密码-->
    <add key="MainPwd" value="${config.MainPwd}" />
    <add key="WebAPIServiceURL" value="${config.WebAPIServiceURL}" />
    <!--当前系统所在环境（XCLCMS.Lib.Common.Comm.SysEnvironmentEnum）-->
    <add key="SysEnvironment" value="${ENV}" />
</appSettings>