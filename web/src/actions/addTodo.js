import axios from 'axios';

import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE
} from './types';

import { apiUrl } from './index';

function addTodoRequest() {
    return {
        type: ADD_TODO_REQUEST
    };
}

function addTodoSuccess(payload) {
    return {
        type: ADD_TODO_SUCCESS,
        payload
    };
}

function addTodoFailure(error) {
    return {
        type: ADD_TODO_FAILURE,
        error
    };
}

//Add a todo
export default function addTodo(title) {
    return dispatch => {
        //for loading message
        dispatch(addTodoRequest());

        //api request
        return axios.post(apiUrl, { 'title': title, 'status': 'TODO' })
            .then(response => {
                dispatch(addTodoSuccess(response.data));
            }).catch((err) => {
                dispatch(addTodoFailure(err.message));
            });
    };
}