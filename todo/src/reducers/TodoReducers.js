export default (state=[], action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.item]
    case 'REMOVE+TODO':
    let newTodo=[...state]
    newTodo.splice(action.item,1)
    return newTodo
    default:
    return state

  }
}
