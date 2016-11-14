import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, removeTodo, updateTodo } from '../actions/index';

class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    renderTodoItem(todo) {
        return (
            <li className={`list-group-item clearfix ${todo.status === "DONE" ? "list-group-item-success" : ""}`} key={todo._id}>
                <span>{todo.title}</span>
                <div className="pull-right" role="group">
                    <button className="btn btn-xs btn-danger img-circle" onClick={ () => this.props.removeTodo(todo._id)}>X</button>
                    <span> </span>
                    <button className="btn btn-xs btn-success img-circle" onClick={ () => this.props.updateTodo(todo._id, todo.status)}>✓</button>
                </div>
            </li>
        );
    }

    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        return(
            <ul className="list-group">    
            {this.props.todos.map(this.renderTodoItem.bind(this))}
            </ul>
        ); 
    }

}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos, removeTodo, updateTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);