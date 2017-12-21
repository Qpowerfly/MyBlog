import { createStore } from 'redux'
import rds from './reducer'

const store =createStore(rds);

export default store;