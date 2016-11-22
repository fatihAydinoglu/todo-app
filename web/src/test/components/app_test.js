import React from 'react';
import ReactDOM from 'react-dom';
import { renderComponent } from '../test_helper';
import chai from 'chai';
import {mount, shallow} from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import App from '../../components/app'
import AddTodoForm from '../../containers/add_todo_form';
import TodoList from '../../containers/todo_list';
import UserMessage from '../../containers/user_message';

const expect = chai.expect;
const mockStore = configureMockStore([thunk]);

// Use 'describe' to group together similar tests
describe('App Component', () => {

    let store;

    beforeEach(() => {
        store = mockStore({
            todos: {
                payload: [{ "_id": "1", "title": "read a book", "status": "TODO" }], pending: false, error: ''
            },
        });
    });

    it('should have child components', () => {

        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(wrapper.find(AddTodoForm).length).to.equal(1);
        expect(wrapper.find(TodoList).length).to.equal(1);
        expect(wrapper.find(UserMessage).length).to.equal(1);
    })


});
