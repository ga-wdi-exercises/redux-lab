import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './stylesheets/index.css';

import App from './components/App.js';
import Store from './Store'

// import registerServiceWorker from './registerServiceWorker';
const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
