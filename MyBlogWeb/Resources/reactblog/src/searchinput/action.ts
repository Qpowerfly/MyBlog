import actionTypes from './actionTypes'
import { IAction } from './base';

const changeEngine = (): IAction => {
    return {
        type: actionTypes.ChangeEngineOption,
        idx:1
    }
};