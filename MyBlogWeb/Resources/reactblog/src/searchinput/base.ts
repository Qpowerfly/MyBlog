import { Reducer, Action } from "redux";

/**
 * 搜索引擎实体
 */
export class EngineEntity {
    id: number
    name: string
    url: string
    title: string
}


/**
 * 切换搜索引擎
 */
export interface IChangeEngineAction extends Action {
    type: string
    currentEngineID: number
}

/**
 * 单击搜索按钮
 */
export interface ISearchButtonClickAction extends Action {
    type: string
}

/**
 * 输入搜索内容
 */
export interface ISearchKeyWordsChangeAction extends Action {
    type: string
    keyWord: string
}

/**
 * 所有action类型
 */
export type IAllActionType = IChangeEngineAction | ISearchButtonClickAction | ISearchKeyWordsChangeAction

/**
 * store
 */
export interface ISearchStore {
    engineList: Array<EngineEntity>
    currentEngine: EngineEntity
    currentSearchKey: string
}
