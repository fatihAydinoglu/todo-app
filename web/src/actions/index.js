import axios from 'axios';

import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from './fetchTodos'
import { addTodoRequest, addTodoSuccess, addTodoFailure } from './addTodo'
import { updateTodoRequest, updateTodoSuccess, updateTodoFailure } from './updateTodo'
import { removeTodoRequest, removeTodoSuccess, removeTodoFailure } from './removeTodo'

//API URL
export const apiUrl = `http://localhost:3000/api/todo/`;

//Fetch Todos
export function fetchTodos() {
  return dispatch => {
    //for loading message
    dispatch(fetchTodosRequest());

    //api request
    return axios.get(apiUrl).then(response => {
      dispatch(fetchTodosSuccess(response.data));
    }).catch((err) => {
      dispatch(fetchTodosFailure(err.message));
    });
  }
}

//Add a todo
export function addTodo(title) {
  return dispatch => {
    //for loading message
    dispatch(addTodoRequest());

    //api request
    return axios.post(apiUrl, { "title": title, "status": "TODO" })
      .then(response => {
        dispatch(addTodoSuccess(response.data));
      }).catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  }
}

//Remove a todo
export function removeTodo(id) {
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
  }
}

//Update a todo
export function updateTodo(id, status) {
  return dispatch => {
    //for loading message
    dispatch(updateTodoRequest());

    //api request
    const newStatus = status === "TODO" ? "DONE" : "TODO";

    return axios.put(apiUrl + id, { "status": newStatus })
      .then(response => {
        dispatch(updateTodoSuccess(response.data));
      }).catch((err) => {
        dispatch(updateTodoFailure(err.message));
      });
  }
}


