import React, { Component } from 'react'

class Reminder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reminderItems: [
        "Learn React",
        "Learn Redux",
        "Learn Rails",
        "Learn Angular"
      ]
    }
  }

  render() {
    console.log(this.props.addItem);
    console.log(this.props.deleteItem);

    const reminderItems = this.state.reminderItems.map( (item, id) => {
      return (
        <li key = {id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>Add</button>
        </li>
      )
    })

    return(
      <div>
          <h1>Here are some things Developers need to learn</h1>
          <p>
            {reminderItems}
          </p>
      </div>
    )
  }
}

export default Reminder
