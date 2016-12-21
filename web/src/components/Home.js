import React, { Component } from 'react';

import AddTodoForm from '../containers/AddTodoForm';
import TodoList from '../containers/TodoList';
import UserMessage from '../containers/UserMessage';

export default class Home extends Component {
    render() {
        return (
            <div className='row'>
                <div className="well col-md-offset-3 col-md-6">
                    <AddTodoForm />
                    <TodoList />
                    <UserMessage />
                </div>
            </div>
        );
    }
}
