import React, { Component } from 'react'

class ToDo extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItems: [
        "Wash Windows",
        "Laundry",
        "WDI Homework",
        "Dishes"
      ]
    }
  }

  render() {
    const todoItems = this.state.todoItems.map( (todo, id) => {
      return (
        <li key={id}>
          {todo}
          <button onClick={() => this.props.addToDo(todo)}>+</button>
        </li>
      )
    })
    return (
      <div>
        <h2>To Do's</h2>
        <ul>
            {todoItems}
        </ul>
      </div>
    )
  }
}

export default Shelf
