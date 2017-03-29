export default (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'DELETE_TODO':
      return state.filter( (todo) => action.todo.id !== todo.id )
    default:
      return state
  }
}
