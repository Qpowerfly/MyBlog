import { createStore } from 'redux'
import rds from './reducer'
import { ISearchStore } from './base';

const initStore: ISearchStore = {
    engineList: ["Baidu", "Google", "All"]
};

const store = createStore<ISearchStore>(rds, initStore);

export default store;