import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { handleReceiveUsers } from '../actions/users';

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleReceiveUsers());
  }
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}
function mapStateToProps({users}) {
  return {
    users
  }
}
export default connect(mapStateToProps)(App);
