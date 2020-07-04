import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Login from './Login';

export default function(RequireAuthComponent, intendedUrl = '/home') {
    class Authenticator extends Component {
        render() {
            const {isAuthenticated} = this.props;
            return (
                <div>
                    {
                        isAuthenticated 
                        ? <RequireAuthComponent {...this.props} />
                        : <Login intendedUrl={intendedUrl} />
                    }
                </div>
            );
        }
    }
    function mapStateToProps({authedUser}) {
        return {
          isAuthenticated: authedUser !== null
        }
      }
      return withRouter(connect(mapStateToProps)(Authenticator));
}
  
