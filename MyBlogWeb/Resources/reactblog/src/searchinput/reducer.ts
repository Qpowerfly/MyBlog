import actionTypes from './actionTypes'
import { Reducer, AnyAction } from 'redux';
import { ISearchAction, ISearchStore } from './base';

export default (state: ISearchStore, action: ISearchAction): ISearchStore => {
    switch (action.type) {
        case actionTypes.ChangeEngineOption:
            state = { ...state }
            break
    }
    return state;
};

