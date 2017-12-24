import * as React from 'react'
import EngineSelect from './engineSelect'

const InputSo = () => {
    return <div className="divSo row">
        <div className="form-horizontal" role="form">
            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-6">
                    <a href="http://news.baidu.com/" className="label label-info" target="_blank">百度新闻</a>&nbsp;
                    <a href="http://zhidao.baidu.com/" className="label label-info" target="_blank">百度知道</a>&nbsp;
                    <a href="http://music.baidu.com/" className="label label-info" target="_blank">百度音乐</a>&nbsp;
                    <a href="http://baike.baidu.com/" className="label label-info" target="_blank">百度百科</a>&nbsp;
                    <a href="http://ditu.baidu.com/" className="label label-info" target="_blank">百度地图</a>&nbsp;
                    <a href="http://news.google.com/" className="label label-success" target="_blank">谷歌新闻</a>&nbsp;
                    <a href="http://music.google.com/" className="label label-success" target="_blank">谷歌音乐</a>&nbsp;
                    <a href="http://images.google.com/" className="label label-success" target="_blank">谷歌图片</a>&nbsp;
                    <a href="http://maps.google.com/" className="label label-success" target="_blank">谷歌地图</a>&nbsp;
                </div>
                <div className="col-md-3">
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <EngineSelect />
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