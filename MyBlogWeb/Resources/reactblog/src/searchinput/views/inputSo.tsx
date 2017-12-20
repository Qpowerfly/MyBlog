import * as React from 'react'

const InputSo = () => {
    return <div className="divSo row">
        <div className="form-horizontal" role="form">
            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-6">
                    <a href="http://news.baidu.com/" className="label label-info" target="_blank">百度新闻</a>
                    <a href="http://zhidao.baidu.com/" className="label label-info" target="_blank">百度知道</a>
                    <a href="http://music.baidu.com/" className="label label-info" target="_blank">百度音乐</a>
                    <a href="http://baike.baidu.com/" className="label label-info" target="_blank">百度百科</a>
                    <a href="http://ditu.baidu.com/" className="label label-info" target="_blank">百度地图</a>
                    <a href="http://news.google.com/" className="label label-success" target="_blank">谷歌新闻</a>
                    <a href="http://music.google.com/" className="label label-success" target="_blank">谷歌音乐</a>
                    <a href="http://images.google.com/" className="label label-success" target="_blank">谷歌图片</a>
                    <a href="http://maps.google.com/" className="label label-success" target="_blank">谷歌地图</a>
                </div>
                <div className="col-md-3">
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <input type="text" className="form-control inputbox" id="txtKW" name="q" autoComplete="off" placeholder="输入您要搜索的内容..." value="" />
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-warning searchBtn ng-binding" id="btnSearch">百度谷歌搜索</button>
                                    <button type="button" className="btn btn-success dropdown-toggle searchBtnMenu" data-toggle="dropdown">
                                        <span className="caret"></span>
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    </div>;
}

export default InputSo