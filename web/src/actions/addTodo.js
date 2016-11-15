import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
} from './types'

export function addTodoRequest() {
  return {
    type: ADD_TODO_REQUEST
  }
}

export function addTodoSuccess(payload) {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  }
}

export function addTodoFailure(error) {
  return {
    type: ADD_TODO_FAILURE,
    error
  }
}