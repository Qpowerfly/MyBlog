import actionTypes from './actionTypes'
import { ISearchAction } from './base';
import { AnyAction } from 'redux';

export const changeEngine = (): ISearchAction => {
    return {
        type: actionTypes.ChangeEngineOption
    }
}

export const searchButtonClick = (): ISearchAction => {
    return {
        type: actionTypes.SearchButtonClick
    }
}

export const searchKeyWordsChange = (): ISearchAction => {
    return {
        type: actionTypes.SearchKeyWordsChange
    }
}