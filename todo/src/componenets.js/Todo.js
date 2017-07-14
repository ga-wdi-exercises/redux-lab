import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as TodoActions from '../actions/TodoActions'
import Notebook from '../components/Notebook'

const Todo = (props)=>{
  let todoLists = props.todo.map((list,id)=>{
    return(
      <li key={id}>
        {list}
        <button onClick={()=>{props.actions.removeFromTodo(id)}}>-</button>
      </li>
    )
  })
  return(
    <div>
      <Shelf addItem={props.actions.addToTodo}/>
      <h2>Todo</h2>
      <ol>
        {todoLists}
      </ol>
    </div>
  )
}

function mapStoreStateToComponentProps(state, props) {
  return{
    todo:state.todo
  }
}
function mapDispatchToComponentProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}
const wrapperFunction = connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)
const wrappedComponent = wrapperFunction(Todo)
export default wrappedComponent
