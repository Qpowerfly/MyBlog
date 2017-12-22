import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { ISearchStore, ISearchAction, EngineEntity } from '../base';
import * as actions from '../action'

interface IStateProps {
    engineList?: Array<EngineEntity>
    currentEngine: EngineEntity
}
interface IDispatchProps {
    searchClick: () => void
    keyWordChange: () => void
    searchEngineChange: (id: number) => void
}

class EngineSelect extends React.Component<IStateProps & IDispatchProps> {
    constructor(props: IStateProps & IDispatchProps) {
        super(props);
    }
    render() {
        return <div className="input-group">
            <input type="text" className="form-control inputbox" id="txtKW" name="q" autoComplete="off" placeholder="输入您要搜索的内容..." value="" onChange={this.props.keyWordChange} />
            <div className="input-group-btn">
                <button type="button" className="btn btn-warning searchBtn ng-binding" id="btnSearch" onClick={this.props.searchClick}>{this.props.currentEngine.name}搜索</button>
                <button type="button" className="btn btn-success dropdown-toggle searchBtnMenu" data-toggle="dropdown">
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                    {
                        this.props.engineList.map((v) => {
                            return <li key={v.id}><a href="javascript:void(0);" onClick={this.props.searchEngineChange.bind(this, v.id)}><span className={this.props.currentEngine == v ? "glyphicon glyphicon-ok" : ""}></span>{v.name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

const mapProps = (state: ISearchStore): IStateProps => {
    return {
        engineList: state.engineList,
        currentEngine: state.currentEngine
    };
};

const mapDispatch = (dispatch: Dispatch<ISearchAction>): IDispatchProps => {
    return {
        searchClick: () => dispatch(actions.searchButtonClick()),
        keyWordChange: () => dispatch(actions.searchKeyWordsChange()),
        searchEngineChange: (id: number) => dispatch(actions.changeEngine(id))
    }
}

export default connect(mapProps, mapDispatch)(EngineSelect);