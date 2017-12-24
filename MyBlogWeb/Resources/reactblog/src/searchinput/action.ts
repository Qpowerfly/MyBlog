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

export const searchKeyWordsChange = (): baseInfo.ISearchKeyWordsChangeAction => {
    return {
        type: actionTypes.SearchKeyWordsChange
    }
}