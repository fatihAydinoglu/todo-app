import axios from 'axios';

import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './types';

import { apiUrl } from './index';

function fetchTodosRequest() {
    return {
        type: FETCH_TODOS_REQUEST
    };
}

function fetchTodosSuccess(payload) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload
    };
}

function fetchTodosFailure(error) {
    return {
        type: FETCH_TODOS_FAILURE,
        error
    };
}

//Fetch Todos
export default function fetchTodos() {
    return dispatch => {
        //for loading message
        dispatch(fetchTodosRequest());

        //api request
        return axios.get(apiUrl).then(response => {
            dispatch(fetchTodosSuccess(response.data));
        }).catch((err) => {
            dispatch(fetchTodosFailure(err.message));
        });
    };
}