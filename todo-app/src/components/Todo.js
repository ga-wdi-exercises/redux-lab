import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/Shelf'

const Todo = (props) => {
  let todoItems = props.mytodos.map((todo, id) => {
    return (
      <li key={id}>
        {todo}
        <button onClick={() => props.actions.removeTodo(id)}>-</button>
      </li>
    )
  })
  return (
    <div>
      <Shelf addTodo={props.actions.addTodo} onSearchSubmit={props.actions.search}/>
      <h2>My Todos</h2>
      <ol>
        {todoItems}
      </ol>
    </div>
  )
}

// More information about the implementation pattern below can be found at the link below
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// Subscribes the component to any changes in Redux-managed state (the store)
// the Store's state is being mapped to, or passed into, the components as props
function mapStoreStateToComponentProps(state, props) {
  return {
    mytodos: state.todo
  };
}

// Changes in our program will be reflected when new actions are dispatched to the reducer
function mapDispatchToComponentProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}

// typically the lines below would be condensed into :
// export default connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)(Cart)

// returns a function wrapper that we need to pass the component into
const wrapperFunction = connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = wrapperFunction(Todo)

export default wrappedComponent
