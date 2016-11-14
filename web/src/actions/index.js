import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

const apiUrl = `http://localhost:3000/api/todo/`;

export function addTodo(title) {
  
  const request = axios.post(apiUrl, {"title": title, "status": "TODO"});

  return {
    type: ADD_TODO,
    payload: request
  };
}

export function fetchTodos() {
  const request = axios.get(apiUrl);

  return {
    type: FETCH_TODOS,
    payload: request
  };
}

export function removeTodo(id) {
  const request = axios.delete(apiUrl + id);

  return {
    type: REMOVE_TODO,
    payload: request 
  }
}

export function updateTodo(id, status) {
  let newStatus = status === "TODO" ? "DONE" : "TODO";
  const request = axios.put(apiUrl + id, { "status": newStatus });

  return {
    type: UPDATE_TODO,
    payload: request
  }
}