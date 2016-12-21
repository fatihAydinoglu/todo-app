import axios from 'axios';

import {
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE
} from './types';

import { apiUrl } from './index';

function updateTodoRequest() {
    return {
        type: UPDATE_TODO_REQUEST
    };
}

function updateTodoSuccess(payload) {
    return {
        type: UPDATE_TODO_SUCCESS,
        payload
    };
}

function updateTodoFailure(error) {
    return {
        type: UPDATE_TODO_FAILURE,
        error
    };
}

//Update a todo
export default function updateTodo(id, status) {
    return dispatch => {
        //for loading message
        dispatch(updateTodoRequest());

        //api request
        const newStatus = status === 'TODO' ? 'DONE' : 'TODO';

        return axios.put(apiUrl + id, { 'status': newStatus })
            .then(response => {
                dispatch(updateTodoSuccess(response.data));
            }).catch((err) => {
                dispatch(updateTodoFailure(err.message));
            });
    };
}