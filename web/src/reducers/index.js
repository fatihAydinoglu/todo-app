import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
    routing,
    todos
});

export default rootReducer;