import axios from 'axios';

import {
    REMOVE_TODO_REQUEST,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILURE
} from './types';

import { apiUrl } from './index';

function removeTodoRequest() {
    return {
        type: REMOVE_TODO_REQUEST
    };
}

function removeTodoSuccess(payload) {
    return {
        type: REMOVE_TODO_SUCCESS,
        payload
    };
}

function removeTodoFailure(error) {
    return {
        type: REMOVE_TODO_FAILURE,
        error
    };
}

//Remove a todo
export default function removeTodo(id) {
    return dispatch => {
        //for loading message
        dispatch(removeTodoRequest());

        //api request
        return axios.delete(apiUrl + id)
            .then(response => {
                dispatch(removeTodoSuccess(response.data));
            }).catch((err) => {
                dispatch(removeTodoFailure(err.message));
            });
    };
}