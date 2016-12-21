import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleRemoveClick(event) {
        event.preventDefault();
        const todoId = event.target.getAttribute('data-todoId');

        this.props.removeTodo(todoId);
    }

    handleUpdateClick(event) {
        event.preventDefault();
        const todoId = event.target.getAttribute('data-todoId');
        const todoStatus = event.target.getAttribute('data-todoStatus');
        this.props.updateTodo(todoId, todoStatus);      
    }

    render() {

        const { todo } = this.props;

        return (
            <li className={`list-group-item clearfix ${todo.status === 'DONE' ? 'list-group-item-success' : ''}`}>
                <span>{todo.title}</span>
                <div className="pull-right" role="group">
                    <button 
                        className="btn btn-xs btn-danger img-circle" 
                        data-todoId={todo._id}
                        onClick={this.handleRemoveClick}>
                        X
                    </button>
                    <span> </span>
                    <button 
                        className="btn btn-xs btn-success img-circle" 
                        data-todoId={todo._id}
                        data-todoStatus={todo.status}
                        onClick={this.handleUpdateClick}>
                        ✓
                    </button>
                </div>
            </li>        
        );
    }
}

TodoListItem.propTypes = {
    todo: React.PropTypes.object.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
    updateTodo: React.PropTypes.func.isRequired
};

export default TodoListItem;
