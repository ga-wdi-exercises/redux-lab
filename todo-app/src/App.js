import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
    }
  }
  addSubmit(e){
    this.state.todos.push(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Search addSubmit={this.addSubmit}/>
      </div>
    );
  }
}

export default App;
