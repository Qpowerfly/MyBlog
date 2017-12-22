import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { ISearchStore, ISearchAction } from '../base';
import * as actions from '../action'

interface IStateProps {
    engineList?: Array<string>
}
interface IDispatchProps {
    searchClick: () => void
    keyWordChange: () => void
    searchEngineChange: () => void
}

class EngineSelect extends React.Component<IStateProps & IDispatchProps> {
    constructor(props: IStateProps & IDispatchProps) {
        super(props);
    }
    render() {

        let engineListStr = '';
        (this.props.engineList || []).forEach((v, idx) => {
            engineListStr += <li><a href="javascript:void(0);" onClick={this.props.searchEngineChange}><span className="glyphicon glyphicon-ok ng-scope"></span>{v}</a></li>;
        });

        return <div className="input-group">
            <input type="text" className="form-control inputbox" id="txtKW" name="q" autoComplete="off" placeholder="输入您要搜索的内容..." value="" onChange={this.props.keyWordChange} />
            <div className="input-group-btn">
                <button type="button" className="btn btn-warning searchBtn ng-binding" id="btnSearch" onClick={this.props.searchClick}>百度谷歌搜索</button>
                <button type="button" className="btn btn-success dropdown-toggle searchBtnMenu" data-toggle="dropdown">
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" role="menu">{engineListStr}</ul>
            </div>
        </div>
    }
}

const mapProps = (state: ISearchStore): IStateProps => {
    return {
        engineList: state.engineList
    };
};

const mapDispatch = (dispatch: Dispatch<ISearchAction>): IDispatchProps => {
    return {
        searchClick: () => dispatch(actions.searchButtonClick()),
        keyWordChange: () => dispatch(actions.searchKeyWordsChange()),
        searchEngineChange: () => dispatch(actions.changeEngine())
    }
}

export default connect(mapProps, mapDispatch)(EngineSelect);