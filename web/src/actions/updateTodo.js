import {
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE
} from './types'

export function updateTodoRequest() {
  return {
    type: UPDATE_TODO_REQUEST
  }
}

export function updateTodoSuccess(payload) {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload
  }
}

export function updateTodoFailure(error) {
  return {
    type: UPDATE_TODO_FAILURE,
    error
  }
}