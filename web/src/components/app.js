import React, { Component } from 'react';

import AddTodoForm from '../containers/add_todo_form';
import TodoList from '../containers/todo_list';
import UserMessage from '../containers/user_message';

export default class App extends Component {
    render() {
        return (
            <div className="well col-md-offset-3 col-md-6">
                <AddTodoForm />
                <h3>Todo List:</h3>
                <TodoList />
                <UserMessage />
            </div>
        );
    }
}
