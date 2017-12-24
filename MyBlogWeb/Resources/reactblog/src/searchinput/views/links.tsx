import * as React from "react";

const isHttps: boolean = window.location.protocol.indexOf("https") >= 0;

const Links = () => {
    return <div className="panel  panel-warning divLinks">
        <div className="panel-body">
            <div className="col-md-1">门户：</div>
            <div className="col-md-1"><a href="http://www.qq.com/" target="_blank">腾讯网</a></div>
            <div className="col-md-1"><a href="http://www.ifeng.com/" target="_blank">凤凰网</a></div>
            <div className="col-md-1"><a href="http://www.sina.com.cn/" target="_blank">新浪网</a></div>
            <div className="col-md-1"><a href="http://www.163.com/" target="_blank">网易</a></div>

            <div className="col-md-12"></div>

            <div className="col-md-1">视频：</div>
            <div className="col-md-1"><a href="http://www.youku.com/" target="_blank">优酷</a></div>
            <div className="col-md-1"><a href="http://www.iqiyi.com/" target="_blank">爱奇艺</a></div>
            <div className="col-md-1"><a href="http://www.xiaopian.com/" target="_blank">电影天堂</a></div>
            <div className="col-md-1"><a href="http://tv.cctv.com/live/" target="_blank">CNTV</a></div>

            <div className="col-md-12"></div>

            <div className="col-md-1">节目：</div>
            <div className="col-md-1"><a href="http://list.youku.com/show/spm_a2hww.20023042.search.4_id_zd5c211ba91af11e5a080.html" target="_blank">CX六点半</a></div>
            <div className="col-md-1"><a href="http://www.iqiyi.com/a_19rrgifngp.html#vfrm=2-3-0-1" target="_blank">晓说</a></div>
            <div className="col-md-1"><a href="http://list.youku.com/show/id_z6e782defbfbd0d4e11ef.html?spm=a2h0j.8191423.subscription_wrap.DD~A">晓说2017</a></div>
            <div className="col-md-1"><a href="http://list.youku.com/show/spm_a2hww.20023042.search.4_id_z5bdbf57c947311e3b8b7.html" target="_blank">罗辑思维</a></div>

            <div className="col-md-12"></div>

            <div className="col-md-1">购物：</div>
            <div className="col-md-1">
                <a href={isHttps ? "https://union-click.jd.com/jdc?e=0&p=AyIPZRprFDJWWA1FBCVbV0IUEEULRFRBSkAOClBMW2VzDhJRdnFdSD5iRkdsVX4TU0tSABRrVxlsEQZVHUcVAg4HUgpbHQkXD14ZWiUCEwRRHF8VBxUHZRtaFAMQD1EaWB0yIgdUKxB7AyIHVBJaHAcaA1UZaxUGEgZcGVgdBBMPVRhrEjJbQwdFBENfSgdWGWslMiI3ZRprFA%3D%3D&t=W1dCFBBFC0RUQUpADgpQTFs%3D" : "http://union-click.jd.com/jdc?e=0&p=AyIPZRprFDJWWA1FBCVbV0IUEEULRFRBSkAOClBMW2VyJWxWZF8CazhtSnl8MF4sEFAVTyldVxlsEQZVHUcVAg4HUgpbHQkXBF4YUiUCEwRRHF8VBxUHZRtaFAMQD1EaWB0yIgdUKxB7AyIHVBJbEQATAlUdaxUGEgZcGVgRBxsGVR9rEjJbQwdFBENfSgdWGWslMiI3ZRprFA%3D%3D&t=W1dCFBBFC0RUQUpADgpQTFs%3D"} target="_blank">京东</a>
            </div>
            <div className="col-md-1"><a href="https://ai.taobao.com/search/index.htm?fcat=50102996&amp;key=女装&amp;pid=mm_24125707_36080531_149642272" target="_blank">淘宝</a></div>
            <div className="col-md-1"><a href="http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&amp;AllianceID=698455&amp;sid=1236041&amp;ouid=&amp;app=0101B00&amp;jumpUrl=http://e.ctrip.com/flight/eflightonline/SearchFlights.aspx" target="_blank">机票</a></div>
            <div className="col-md-1"><a href="http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&amp;AllianceID=698455&amp;sid=1236041&amp;ouid=&amp;app=0101A00&amp;jumpUrl=http://hotels.ctrip.com/domestic/searchhotel.aspx" target="_blank">酒店</a></div>
        </div>
    </div>
}


export default Links