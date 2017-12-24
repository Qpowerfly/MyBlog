import * as React from "react";
import { connect } from "react-redux";
import * as baseInfo from '../base'
import ReactHtmlParser from 'react-html-parser';

interface IStateProps {
    currentEngine: baseInfo.EngineEntity
    engineList: Array<baseInfo.EngineEntity>
}



class ResultFrame extends React.Component<IStateProps>{
    constructor(props: IStateProps) {
        super(props);
    }
    render() {

        if (!this.props.currentEngine.url) {
            return <div className="row divSoContent">
                {
                    this.props.engineList.map((v, idx) => {
                        if (v.url) {
                            return <div className="col-md-6" key={idx}>
                                <div className={idx % 2 == 0 ? "panel panel-info" : "panel panel-success"}>
                                    <div className="panel-heading"><span>{ReactHtmlParser(v.title)}</span><a href={v.url} className="linkFullScreen" target="_blank"><div className="glyphicon glyphicon-fullscreen" style={{ float: "right" }}></div></a></div>
                                    <div className="panel-body">
                                        <iframe data-src={v.url} src=""></iframe>
                                    </div>
                                </div>
                            </div>
                        }
                        return null;
                    })
                }
            </div>
        }


        return <div className="row divSoContent">
            <div className="col-md-12">
                <div className="panel panel-info">
                    <div className="panel-heading"><span>{ReactHtmlParser(this.props.currentEngine.title)}</span><a href={this.props.currentEngine.url} className="linkFullScreen" target="_blank"><div className="glyphicon glyphicon-fullscreen" style={{ float: "right" }}></div></a></div>
                    <div className="panel-body">
                        <iframe data-src={this.props.currentEngine.url} src=""></iframe>
                    </div>
                </div>
            </div>
        </div>
    }
}


const mapProps = (state: baseInfo.ISearchStore): IStateProps => {
    return {
        currentEngine: state.currentEngine,
        engineList: state.engineList
    }
}


export default connect(mapProps)(ResultFrame)