import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import Home from '../../components/Home';
import AddTodoForm from '../../containers/AddTodoForm';
import TodoList from '../../containers/TodoList';
import UserMessage from '../../containers/UserMessage';

const expect = chai.expect;
const mockStore = configureMockStore([thunk]);

// Use 'describe' to group together similar tests
describe('Home Component', () => {

    let store;

    beforeEach(() => {
        store = mockStore({
            todos: {
                todoList: [{ '_id': '1', 'title': 'read a book', 'status': 'TODO' }], pending: false, error: ''
            },
        });
    });

    it('should have child components', () => {

        const wrapper = shallow(
            <Home />
        );

        expect(wrapper.find(AddTodoForm).length).to.equal(1);
        expect(wrapper.find(TodoList).length).to.equal(1);
        expect(wrapper.find(UserMessage).length).to.equal(1);
    });


});
