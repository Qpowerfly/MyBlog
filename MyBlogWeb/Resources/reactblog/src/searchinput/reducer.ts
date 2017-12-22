import actionTypes from './actionTypes'
import { Reducer, AnyAction } from 'redux';
import { ISearchAction, ISearchStore } from './base';

export default (state: ISearchStore, action: ISearchAction): ISearchStore => {
    switch (action.type) {
        case actionTypes.ChangeEngineOption:
            let id = action['currentEngineID'];
            state = { ...state, currentEngine: state.engineList.find(k => k.id == id) }
            break
        case actionTypes.SearchButtonClick:
            break;
        case actionTypes.SearchKeyWordsChange:
            break;
    }
    return state;
};