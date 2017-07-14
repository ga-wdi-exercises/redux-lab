import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Done from './components/Done.js'
// The Provider is a special type of component.
// The Provider will wrap our App component along with a store that encapsulates
// local states within the App component.

import App from './components/App'
import Store from './Store'


const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Done />
  </Provider>,
  document.getElementById('root')
)
