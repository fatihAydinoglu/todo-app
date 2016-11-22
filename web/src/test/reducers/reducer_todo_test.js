import chai from 'chai'
import reducerTodo from '../../reducers/reducer_todo'
import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS, UPDATE_TODO_SUCCESS, REMOVE_TODO_SUCCESS } from '../../actions/types';

const expect = chai.expect;

describe('Todo Reducer', () => {

    const mockTodo = { "_id": "1", "title": "read a book", "status": "TODO" };

    it('handles action with unknown type', () => {
        const initialState = { payload: [], pending: false, error: '' };
        expect(reducerTodo(initialState, {})).to.eql(initialState);
    });


    it('handles action of type FETCH_TODOS_SUCCESS', () => {
        const initialState = { payload: [], pending: false, error: '' };

        const action = { type: FETCH_TODOS_SUCCESS, payload: [mockTodo] };
        const expected = { payload: [mockTodo], pending: false, error: '' };

        expect(reducerTodo(initialState, action)).to.eql(expected);
    });

    it('handles action of type ADD_TODO_SUCCESS', () => {
        const initialState = { payload: [], pending: false, error: '' };

        const action = { type: ADD_TODO_SUCCESS, payload: mockTodo };
        const expected = { payload: [mockTodo], pending: false, error: '' };

        expect(reducerTodo(initialState, action)).to.eql(expected);
    });

    it('handles action of type UPDATE_TODO_SUCCESS', () => {
        const initialState = { payload: [mockTodo], pending: false, error: '' };

        const action = { type: UPDATE_TODO_SUCCESS, payload: { "_id": "1", "title": "read a book", "status": "DONE" } };
        const expected = { payload: [{ "_id": "1", "title": "read a book", "status": "DONE" }], pending: false, error: '' };

        expect(reducerTodo(initialState, action)).to.eql(expected);
    });

    it('handles action of type REMOVE_TODO_SUCCESS', () => {
        const initialState = { payload: [mockTodo], pending: false, error: '' };

        const action = { type: REMOVE_TODO_SUCCESS, payload: { "_id": "1", "title": "read a book", "status": "DONE" } };
        const expected = { payload: [], pending: false, error: '' };

        expect(reducerTodo(initialState, action)).to.eql(expected);
    });

});

