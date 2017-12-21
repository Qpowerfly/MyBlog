import * as React from 'react'




class EngineSelect extends React.Component<object, object> {
    constructor() {
        super({}, {});
        this.searchClick = this.searchClick.bind(this);
    }
    searchClick() {
        alert(11111);
    }
    render() {
        return <div className="input-group">
            <input type="text" className="form-control inputbox" id="txtKW" name="q" autoComplete="off" placeholder="输入您要搜索的内容..." value="" />
            <div className="input-group-btn">
                <button type="button" className="btn btn-warning searchBtn ng-binding" id="btnSearch" onClick={this.searchClick}>百度谷歌搜索</button>
                <button type="button" className="btn btn-success dropdown-toggle searchBtnMenu" data-toggle="dropdown">
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                </ul>
            </div>
        </div>
    }
}


export default EngineSelect;