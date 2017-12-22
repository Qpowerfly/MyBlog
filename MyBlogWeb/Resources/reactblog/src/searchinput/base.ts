import { Reducer, Action } from "redux";


export class EngineEntity {
    id:number
    name: string
    url: string
    title:string
}


export interface ISearchAction extends Action {
    type: string
    [name: string]: any
}

export interface ISearchStore {
    engineList: Array<EngineEntity>
    currentEngine:EngineEntity
}
