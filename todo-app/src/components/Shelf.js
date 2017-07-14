import React, { Component } from 'react'

class Shelf extends Component {
  constructor(props){
    super(props)
    this.state = {
      shelfTodos: [
        "Bananas",
        "Frozen Pizza",
        "Flamin' Hot Cheetos",
        "Arugula"
      ],
      text: ""
    }
  }

  handleSearchInput(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    // const shelfTodos = this.state.shelfTodos.map( (todo, id) => {
    //   return (
    //     <li key={id}>
    //       {todo}
    //       <button onClick={() => this.props.addTodo(todo)}>+</button>
    //     </li>
    //   )
    // })
    return (
      <div>
        <h2>Enter a Todo</h2>

          <label>Text:</label>
          <textarea onChange={(e) => this.handleSearchInput(e)}></textarea>
          <button onClick={() => this.props.addTodo(this.state.text)}>+</button>

        {/* {shelfTodos} */}
      </div>
    )
  }
}

export default Shelf
