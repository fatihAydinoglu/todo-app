import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './types'

export function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export function fetchTodosSuccess(payload) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload
  }
}

export function fetchTodosFailure(error) {
  return {
    type: FETCH_TODOS_FAILURE,
    error
  }
}