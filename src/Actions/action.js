import { ADD_TODO, DELETE_TODO,COMPLETE_TODO,EDIT_TODO} from "../constants/actionTypes";

export const AddTodo = payload => {
  return {
    type: ADD_TODO, 
    payload
  }
};

export  const DeleteTodo= payload =>{
    return {
        type:DELETE_TODO,
        payload
    }
}
export  const CompleteTodo= payload =>{
    return {
        type:COMPLETE_TODO,
        payload
    }
}
export  const EditTodo=( payload,id )=>{
    return {
        type:EDIT_TODO,
        payload,
        id
    }
}