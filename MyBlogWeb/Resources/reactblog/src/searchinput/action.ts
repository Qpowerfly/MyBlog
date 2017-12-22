import actionTypes from './actionTypes'
import { ISearchAction, EngineEntity } from './base';
import { AnyAction } from 'redux';

export const changeEngine = (id: number): ISearchAction => {
    return {
        type: actionTypes.ChangeEngineOption,
        currentEngineID: id
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