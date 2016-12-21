import React from 'react';
import chai from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import TodoList from '../../containers/TodoList';


const expect = chai.expect;
const mockStore = configureMockStore([thunk]);

// Use 'describe' to group together similar tests
describe('TodoList Container', () => {

    let store;

    beforeEach(() => {
        store = mockStore({
            todos: {
                todoList: [{ '_id': '1', 'title': 'read a book', 'status': 'TODO' }], pending: false, error: ''
            },
        });
    });

    it('should list todos', () => {

        const wrapper = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

        expect(wrapper.find('.todolist').html()).to.contain('read a book');

    });


});
