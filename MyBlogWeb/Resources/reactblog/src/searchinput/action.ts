import actionTypes from './actionTypes'
import * as baseInfo from './base';
import { AnyAction } from 'redux';







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

export const searchKeyWordsChange = (kw: string): baseInfo.ISearchKeyWordsChangeAction => {
    return {
        type: actionTypes.SearchKeyWordsChange,
        keyWord: kw
    }
}

export const searchKeyWordsChangeAsync = (kw: string) => {
    return (dispatch: any) => {
        fetch(`https://api.bing.com/qsonhs.aspx?type=cb&cb=bingSoCallBack&q=${kw}&_=1514293293180`, {
            mode: "no-cors"
        }).then(res => {
            return res.text();
        }).then(res => {
            return dispatch(searchKeyWordsChange(res));
        });
    }
}