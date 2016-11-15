import {
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE
} from './types'

export function removeTodoRequest() {
  return {
    type: REMOVE_TODO_REQUEST
  }
}

export function removeTodoSuccess(payload) {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload
  }
}

export function removeTodoFailure(error) {
  return {
    type: REMOVE_TODO_FAILURE,
    error
  }
}