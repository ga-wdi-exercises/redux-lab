export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      let newTodo = [...state];
      newCart.splice(action.item, 1);
      return newTodo;
    default:
      return state
  }
}
