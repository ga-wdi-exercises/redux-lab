import React, { Component } from 'react'

class Done extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItems: [
        "Go Grocery Shopping",
        "Wash Dishes",
        "Walk the Cats",
        "Drink Wine"
      ]
    }
  }

  render() {
    const doneItems = this.state.todoItems.map( (item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>+</button>
        </li>
      )
    })
    return (
      <div>
        <h2>Chores To Do</h2>
        <ul>
            {doneItems}
        </ul>
      </div>
    )
  }
}

export default Done
