import 'isomorphic-fetch'; // Fetch polyfill for node and browsers alike
import thunk from 'redux-thunk';
import chai from 'chai';
import configureMockStore from 'redux-mock-store';
import { apiUrl, fetchTodos, addTodo, updateTodo, removeTodo } from '../../actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const expect = chai.expect;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);


describe('Todos Action Creator', () => {

    //List Todo Test
    it('should list todos', () => {
        //Mock response
        mock.onGet(apiUrl).reply(200, [{ '_id': '1', 'title': 'read a book', 'status': 'TODO' }]);

        const store = mockStore();

        return store.dispatch(fetchTodos())
            .then(() => {
                //Expected action
                const expected = [
                    { type: 'FETCH_TODOS_REQUEST' },
                    { type: 'FETCH_TODOS_SUCCESS', payload: [{ '_id': '1', 'title': 'read a book', 'status': 'TODO' }] }
                ];

                //Test it
                expect(store.getActions()).to.deep.equal(expected);
            });
    });

    //Add a todo Test
    it('should add new items', () => {
        //Mock response
        mock.onPost(apiUrl, { 'title': 'read two books', 'status': 'TODO' })
            .reply(200, { '_id': '2', 'title': 'read two books', 'status': 'TODO' });

        const store = mockStore();

        return store.dispatch(addTodo('read two books'))
            .then(() => {
                //Expected action
                const expected = [
                    { type: 'ADD_TODO_REQUEST' },
                    { type: 'ADD_TODO_SUCCESS', payload: { '_id': '2', 'title': 'read two books', 'status': 'TODO' } }
                ];

                //Test it
                expect(store.getActions()).to.deep.equal(expected);
            });
    });

    //Update todo Test
    it('should update an item', () => {
        //Mock response
        mock.onPut(apiUrl + '1', { 'status': 'DONE' }).reply(200, { '_id': '1', 'title': 'read a book', 'status': 'DONE' });

        const store = mockStore();

        return store.dispatch(updateTodo('1', 'TODO'))
            .then(() => {
                //Expected action
                const expected = [
                    { type: 'UPDATE_TODO_REQUEST' },
                    { type: 'UPDATE_TODO_SUCCESS', payload: { '_id': '1', 'title': 'read a book', 'status': 'DONE' } }
                ];

                //Test it
                expect(store.getActions()).to.deep.equal(expected);
            });
    });


    //Remove todo Test
    it('should remove an item', () => {
        //Mock response
        mock.onDelete(apiUrl + '1').reply(200, { '_id': '1', 'title': 'read a book', 'status': 'DONE' });

        const store = mockStore();

        return store.dispatch(removeTodo('1'))
            .then(() => {
                //Expected action
                const expected = [
                    { type: 'REMOVE_TODO_REQUEST' },
                    { type: 'REMOVE_TODO_SUCCESS', payload: { '_id': '1', 'title': 'read a book', 'status': 'DONE' } }
                ];

                //Test it
                expect(store.getActions()).to.deep.equal(expected);
            });
    });


});