import actionTypes from './actionTypes'
import { Reducer, AnyAction } from 'redux';
import * as baseInfo from './base';


export default (state: baseInfo.ISearchStore, action: baseInfo.IAllActionType): baseInfo.ISearchStore => {
    switch (action.type) {
        case actionTypes.ChangeEngineOption:
            let id = (<baseInfo.IChangeEngineAction>action).currentEngineID;
            state = { ...state, currentEngine: state.engineList.filter(k => k.id == id)[0] }
            localStorage.setItem("currentEngineId", String(id))
            break
        case actionTypes.SearchButtonClick:
            break;
        case actionTypes.SearchKeyWordsChange:
            let searchAction = <baseInfo.ISearchKeyWordsChangeAction>action;
            state = {
                ...state,
                currentSearchKey: searchAction.keyWord,
                currentSearchKeySugList: searchAction.keyWordMatchList
            }
            console.log(state.currentSearchKey);
            break;
    }
    return state;
};