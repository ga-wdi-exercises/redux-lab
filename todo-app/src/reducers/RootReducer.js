import page from './TodoReducers'
import { combineReducers } from 'redux'

// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart component
const rootReducer = combineReducers({
  todo //ES6 short hand for {cart: cart}
})

export default rootReducer
