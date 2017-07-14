export const addToTodo = (list)=>{
  console.log(`ACTION:adding ${list} to todo`);
  return{
    type:'ADD_TODO',
    list
  }
}

export const removeFromTodo= (list)=>{
  console.log(`Action:Removing ${list} from todo`);
  return{
    type:'REMOVE_TODO',
    list
  }
}
