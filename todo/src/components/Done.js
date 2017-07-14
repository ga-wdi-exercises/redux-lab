import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ToDoActions from '../actions/ToDoActions'
import ToDo from '../components/ToDo'

const Done = (props) => {
  let doneItems = props.done.map((todo, id) => {
    return (
      <li key={id}>
        {todo}
        <button onClick={() => props.actions.removeFromDone(id)}>-</button>
      </li>
    )
  })
  return (
    <div>
      <Done addItem={props.actions.addToDone}/>
      <h2>Completed To Do's</h2>
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
function mapStoreStateToComponentProps(done, props) {
  return {
    done: state.done
  };
}

// Changes in our program will be reflected when new actions are dispatched to the reducer
function mapDispatchToComponentProps(dispatch) {
  return {
    actions: bindActionCreators(DoneActions, dispatch)
  }
}

// typically the lines below would be condensed into :
// export default connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)(Cart)

// returns a function wrapper that we need to pass the component into
const wrapperFunction = connect(mapStoreStateToComponentProps, mapDispatchToComponentProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = wrapperFunction(Done)

export default wrappedComponent
