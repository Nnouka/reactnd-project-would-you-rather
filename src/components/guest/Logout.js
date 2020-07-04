import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setAuthedUser} from '../../actions/authedUser';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthedUser(null));
        this.props.history.push('/');
    }
    render () {
        return (
            <div></div>
        );
    }
}

export default withRouter(connect()(Logout));