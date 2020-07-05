import React, { Component, Fragment } from 'react';
import Login from '../guest/Login';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import LodingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import _404 from '../errors/_404';
import Home from '../home/Home';
import Nav from './Nav';
import Logout from '../guest/Logout';
import Question from '../home/Question';
import LeaderBoard from '../home/LeaderBoard';
import AddQuestion from '../home/AddQuestion';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
      dispatch(handleInitialData());
  }
  render() {
    // console.log(this.props);
    return (
      <Router>
        <Fragment>
          <LodingBar />
          <div className='container'>
            <Nav />
            <div className='clear-fix'></div>
            {
              this.props.loading 
              ? 'Loading Please wait...'
              : 
              <div>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/logout' component={Logout} />
                  <Route exact path='/questions/:id' component={Question} />
                  <Route exact path='/leaderboard' component={LeaderBoard} />
                  <Route exact path='/add' component={AddQuestion} />
                  <Route component={_404} />
                </Switch>
                  
              </div>
              
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    users,
    loading: Object.keys(users).length === 0
  }
}
export default connect(mapStateToProps)(App);
