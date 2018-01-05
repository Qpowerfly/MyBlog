import actionTypes from './actionTypes'
import * as baseInfo from './base';
import { AnyAction } from 'redux';
import { print } from 'util';

let win: any = window;

export const changeEngine = (id: number): baseInfo.IChangeEngineAction => {
    return {
        type: actionTypes.ChangeEngineOption,
        currentEngineID: id
    }
}

export const searchButtonClick = (): baseInfo.ISearchButtonClickAction => {
    return {
        type: actionTypes.SearchButtonClick
    }
}

export const searchKeyWordsChange = (kw: string, kwMatchs: Array<string>): baseInfo.ISearchKeyWordsChangeAction => {
    return {
        type: actionTypes.SearchKeyWordsChange,
        keyWord: kw,
        keyWordMatchList: kwMatchs
    }
}

let keySugXHRObj: any = null;

export const searchKeyWordsChangeAsync = (kw: string) => {
    win.bingSoCallBackResult = [];
    if (!win.bingSoCallBack) {
        win.bingSoCallBack = (m: any) => {
            if (!m) {
                return;
            }
            for (var k in m) {
                if (!m[k] || !m[k].Results || m[k].Results.length == 0 || !m[k].Results[0].Suggests) {
                    return;
                }
                win.bingSoCallBackResult = $.map(m[k].Results[0].Suggests, function (x: any) {
                    return x.Txt;
                });
                return;
            };
            return;
        }
    }
    return (dispatch: any) => {
        keySugXHRObj && keySugXHRObj.abort();
        keySugXHRObj = $.ajax({
            type: "get",
            dataType: "jsonp",
            data: { "q": kw },
            url: "https://api.bing.com/qsonhs.aspx?type=cb",
            jsonp: "cb",
            jsonpCallback: "bingSoCallBack"
        });
        keySugXHRObj.then(() => {
            dispatch(searchKeyWordsChange(kw, win.bingSoCallBackResult));
        });

    }
}