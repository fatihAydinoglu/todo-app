import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = { addTodoText: ''};
    }

    onInputChange(event) {
        this.setState({ addTodoText: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.addTodo(this.state.addTodoText);
        this.setState({ addTodoText: '' });
    }

    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input 
                    className="form-control" 
                    placeholder="Write your to do here..."
                    value={this.state.addTodoText}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Add</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodoForm);