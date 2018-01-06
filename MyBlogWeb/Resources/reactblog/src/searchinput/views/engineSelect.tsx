import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import * as baseInfo from '../base';
import * as actions from '../action'

let win: any = window;

interface IStateProps {
    engineList?: Array<baseInfo.EngineEntity>
    currentEngine: baseInfo.EngineEntity
    currentSearchKey: string
}
interface IDispatchProps {
    searchClick: () => void
    keyWordChange: (e: any) => void
    searchEngineChange: (id: number) => void
}

class EngineSelect extends React.Component<IStateProps & IDispatchProps> {
    constructor(props: IStateProps & IDispatchProps) {
        super(props);
    }
    componentDidMount() {
        let bingSoCallBackResult: Array<string> = [];
        let bingSoAjaxObject: any = null;
        win.bingSoCallBack = function (m: any) {
            if (!m) {
                return;
            }
            for (let k in m) {
                if (!m[k] || !m[k].Results || m[k].Results.length == 0 || !m[k].Results[0].Suggests) {
                    return;
                }
                bingSoCallBackResult = $.map(m[k].Results[0].Suggests, function (x: any) {
                    return x.Txt;
                });
                return;
            };
            return;
        };
        let search = function () {
            $(".autocomplete-suggestions").hide();
            let kw = $.trim($("#txtKW").val());
            if (kw == '') return;
            kw = encodeURIComponent(kw);
            $(".divSoContent iframe").each(function () {
                this.src = $(this).attr('data-src') + kw;
                $(this).closest(".panel").find(".linkFullScreen").attr({ "href": this.src });
            });
            window.history.pushState(null, "", `${win.pageConfig.RootURL}Common/So?q=${kw}`);
        };
        let resizeIframe = function () {
            let h = $("body").height() - $(".divLinks").height() - 220;
            $("#styleIframe").html(".divSoContent iframe{height:" + h + "px;}");
        };
        $(function () {
            $("body").on("click", "#btnSearch", function () {
                search();
                return false;
            });
            $("#txtKW").val(win.pageConfig.SoDefaultKey).on("keyup", function (e: any) {
                if (e.keyCode == 13) {
                    search();
                }
            }).autoComplete({
                minChars: 1,
                source: function (term: any, response: any) {
                    bingSoCallBackResult = [];
                    bingSoAjaxObject && bingSoAjaxObject.abort();
                    bingSoAjaxObject = $.ajax({
                        type: "get",
                        dataType: "jsonp",
                        data: { "q": term },
                        url: "https://api.bing.com/qsonhs.aspx?type=cb&mkt=zh-cn",
                        jsonp: "cb",
                        jsonpCallback: "bingSoCallBack",
                        success: function (data: any) {
                            response(bingSoCallBackResult);
                        }
                    });
                }
            });
            $(win).on("resize", function () {
                resizeIframe();
            });
            search();
            resizeIframe();
        });
    }
    render() {
        return <div className="input-group">
            <input type="text" className="form-control inputbox" id="txtKW" name="q" autoComplete="off" placeholder="输入您要搜索的内容..." onChange={this.props.keyWordChange} />
            <div className="input-group-btn">
                <button type="button" className="btn btn-warning searchBtn" id="btnSearch" onClick={this.props.searchClick}>{this.props.currentEngine.name}搜索</button>
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

const mapProps = (state: baseInfo.ISearchStore): IStateProps => {
    return {
        engineList: state.engineList,
        currentEngine: state.currentEngine,
        currentSearchKey: state.currentSearchKey
    };
};

const mapDispatch = (dispatch: Dispatch<baseInfo.IAllActionType>): IDispatchProps => {
    return {
        searchClick: () => dispatch(actions.searchButtonClick()),
        keyWordChange: (e) => dispatch(actions.searchKeyWordsChangeAsync(e.target.value)),
        searchEngineChange: (id: number) => dispatch(actions.changeEngine(id))
    }
}

export default connect(mapProps, mapDispatch)(EngineSelect); 