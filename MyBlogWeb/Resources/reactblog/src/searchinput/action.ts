import actionTypes from './actionTypes'
import { ISearchAction } from './base';
import { AnyAction } from 'redux';

export const changeEngine = (): ISearchAction => {
    return {
        type: actionTypes.ChangeEngineOption,
        idx: 1
    }
}

export const searchButtonClick = (): ISearchAction => {
    return {
        type: actionTypes.SearchButtonClick
    }
}