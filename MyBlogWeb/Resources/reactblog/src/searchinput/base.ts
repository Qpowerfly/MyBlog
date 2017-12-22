import { Reducer, Action } from "redux";

export interface ISearchAction extends Action {
    type: string
    [name: string]: any
}

export interface ISearchStore {
    engineList: Array<string>
}
