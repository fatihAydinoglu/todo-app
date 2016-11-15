import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { pending, error } = this.props.todos;

        return (
            <div className="user-message">
                {error && <div className="alert alert-danger" role="alert">ERROR! - {error}</div>}
                {pending && <div className="alert alert-info" role="alert">Loading...</div>}
            </div>
        );
    }
}

function mapStateToProps({ todos }) {
    return { todos };
}

export default connect(mapStateToProps)(UserMessage);