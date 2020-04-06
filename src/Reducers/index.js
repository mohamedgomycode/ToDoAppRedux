import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO } from "../constants/actionTypes";

export default function Reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, id: Math.random(),isComplete:false }];
    case DELETE_TODO:
      return state.filter(el => el.id !== action.payload);
    case COMPLETE_TODO:
      return state.map(el => el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
      ); 
      case EDIT_TODO:
          return state.map(el =>el.id === action.id ? { ...el, text: action.payload } : el )
    default:
      return state;
  }
}
