export default(state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'REMOVE_TODO':
      let newCart = [...state];
      newCart.splice(action.todo, 1);
      return newCart;
    default:
      return state
  }
}
