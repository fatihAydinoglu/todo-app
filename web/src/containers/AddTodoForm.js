import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, userMessage } from '../actions/index';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = { addTodoText: '' };
    }

    onInputChange(event) {
        this.setState({ addTodoText: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        const { addTodoText } = this.state;

        if(/\S/.test(addTodoText)) {
            this.props.addTodo(addTodoText)
                .then(() => {
                    this.setState({ addTodoText: '' });
                })
                .catch(() => {
                    this.props.userMessage('There is an error.', 'error');
                });
        } else {
            this.props.userMessage('Todo can\'t be blank.', 'error');
        }
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.onFormSubmit}>
                <div className='form-group'>
                    <input
                        className="form-control"
                        placeholder="Write your to do here and press Enter."
                        value={this.state.addTodoText}
                        onChange={this.onInputChange}
                        />
                </div>
            </form>
        );
    }
}

export default connect(null, { addTodo, userMessage })(AddTodoForm);