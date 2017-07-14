export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      let newToDo = [...state];
      newToDo.splice(action.item, 1);
      return newToDo;
    default:
      return state
  }
}
