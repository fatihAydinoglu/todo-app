import React, { Component } from 'react';

import AddTodoForm from '../containers/add_todo_form';
import TodoList from '../containers/todo_list';

export default class App extends Component {
  render() {
    return (
      <div className="well col-xs-5">
        <AddTodoForm />
        <h3>Todo List:</h3>
        <TodoList />
      </div>
    );
  }
}
