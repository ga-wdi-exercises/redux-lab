import {createStore} from 'redux'
import rootReducer from './reducers/RootReducer'

export default (intialState)=>{
  return createStore(rootReducer,intialState)
}
