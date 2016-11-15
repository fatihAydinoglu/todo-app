import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = { addTodoText: '', validated: true };
    }

    onInputChange(event) {
        this.setState({ addTodoText: event.target.value, validated: true });
    }

    onFormSubmit(event) {
        event.preventDefault();

        if (!this.state.addTodoText) {
            this.setState({ validated: false });
            return;
        }

        this.props.addTodo(this.state.addTodoText);
        this.setState({ addTodoText: '', validated: true });
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.onFormSubmit}>
                <div className={`form-group ${this.state.validated ? "" : "has-error"}`}>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodoForm);