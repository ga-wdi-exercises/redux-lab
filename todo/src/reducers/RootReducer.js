import todo from './ToDoReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo
})

export default rootReducer
