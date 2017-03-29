import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActions from '../actions/TodoActions'
import Reminder from '../components/Reminder'

console.log(TodoActions);

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const TodoItems = this.props.todo.map( (item, id) => {
      return(
        <li key = {id}>
          {item}
        </li>
      )
    })

    return (
      <div>
        <Reminder
          addItem = {this.props.actions.addTodo}
          deleteItem = {this.props.actions.deleteTodo} />
        <h2>Todo</h2>
        <ol>
          {TodoItems}
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

const connection = connect(mapStateToProps, mapDispatchToProps)

const wrappedComponent = connection(Todo)

export default wrappedComponent
