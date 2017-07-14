import React, { Component } from 'react';
import Cart from '../components/Todo'

import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Todo</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
