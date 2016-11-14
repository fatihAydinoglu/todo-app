import { ADD_TODO, FETCH_TODOS, REMOVE_TODO, UPDATE_TODO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [ ...state, action.payload.data ];
  case FETCH_TODOS:  
    return action.payload.data;
  case REMOVE_TODO:
    return state.filter(todo => todo._id !== action.payload.data._id);    
  case UPDATE_TODO:
    return state.map(todo => todo._id === action.payload.data._id ? action.payload.data : todo);
  }
  return state;
}
