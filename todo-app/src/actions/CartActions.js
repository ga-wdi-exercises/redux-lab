// Action Creator function
// This action will be called from a button in the UI
export const addTodo = (todo) => {

  // This console.log is a side effect and technically makes this function 'impure'.
  // It may come in handy when testing to see if we've integrated redux successfully,
  // to determine if our actions are firing

  console.log(`ACTION: adding ${todo} to list`)
  return {
    //actions must have a type property
    type: 'ADD_TODO', //action naming conventions: all caps with snake-case (JAVASCRIPT_CONSTANT naming convention )
    todo //ES6 shorthand again {item: item}
  }
}

export const removeTodo = (todo) => {
  console.log(`ACTION: Removing ${todo} from cart`)
  return {
    type: 'REMOVE_TODO',
    todo
  }
}

export const handleSearchInput = (todo) => {
  console.log(`Input is ${todo}`)
  return {
    type: 'INPUT_CHANGE',
    todo
  }
}
