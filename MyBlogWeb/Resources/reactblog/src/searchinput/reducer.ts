import actionTypes from './actionTypes'
import { Reducer, AnyAction } from 'redux';
import { IAction } from './base'


export default (state: any, action: IAction): any => {
    switch (action.type) {
        case actionTypes.ChangeEngineOption:
            state = { ...state, idx: state.idx + 1 }
            break
    }
    return state;
};

