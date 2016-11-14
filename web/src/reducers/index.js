import { combineReducers } from 'redux';
import TodoReducer from './reducer_todo';

const rootReducer = combineReducers({
  todos: TodoReducer
});

export default rootReducer;