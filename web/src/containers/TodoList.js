import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, removeTodo, updateTodo } from '../actions';
import TodoListItem from '../components/TodoListItem';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleUpdateTodo(todoId, todoStatus) {
        this.props.updateTodo(todoId, todoStatus);
    }

    handleRemoveTodo(todoId) {
        this.props.removeTodo(todoId);
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todoList } = this.props.todos;
        return (
            <div>
                <h2>Your List:</h2>
                <ul className="todolist list-group">
                    { 
                        todoList.map(todo => (
                            <TodoListItem 
                                key={todo._id} 
                                todo={todo}
                                updateTodo={this.handleUpdateTodo}
                                removeTodo={this.handleRemoveTodo}    
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ todos }) {
    return { todos };
}

export default connect(mapStateToProps, { fetchTodos, removeTodo, updateTodo })(TodoList);