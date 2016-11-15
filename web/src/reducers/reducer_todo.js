import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,

    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,

    REMOVE_TODO_REQUEST,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILURE,

    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE
} from '../actions/types';

const initialState = { payload: [], pending: false, error: '' };

export default function(state = initialState, action) {

    let newPayload = [];

    switch (action.type) {
        //Add todo  
        case ADD_TODO_SUCCESS:
            newPayload = state.payload;
            newPayload.push(action.payload);
            return { ...state, payload: newPayload, pending: false, error: '' };

        //Fetch Todos
        case FETCH_TODOS_SUCCESS:
            return { ...state, payload: action.payload, pending: false, error: '' };

        // Remove todo  
        case REMOVE_TODO_SUCCESS:
            return { ...state, payload: state.payload.filter(todo => todo._id !== action.payload._id), pending: false, error: '' };

        // Update todo  
        case UPDATE_TODO_SUCCESS:
            newPayload = state.payload;
            return { ...state,
                payload: newPayload.map(todo => todo._id === action.payload._id ? action.payload : todo),
                pending: false,
                error: ''
            };

        //Loading  
        case UPDATE_TODO_REQUEST:
        case ADD_TODO_REQUEST:
        case FETCH_TODOS_REQUEST:
        case REMOVE_TODO_REQUEST:
            return { ...state, pending: true };

        //Error  
        case ADD_TODO_FAILURE:
        case FETCH_TODOS_FAILURE:
        case REMOVE_TODO_FAILURE:
        case UPDATE_TODO_FAILURE:
            return { ...state, error: action.error, pending: false };

    }

    //Default
    return state;
}
