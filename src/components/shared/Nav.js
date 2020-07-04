import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../assets/icons/icon.jpg';

class Nav extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className='nav'>
                <ul className='left'>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                </ul>
                    {
                        user === undefined 
                        ? ''
                        : 
                        <Fragment>
                            <ul className='right'>
                                <li>
                                    {`Hello ${user.name}`}    
                                </li>
                                <li className='nav-avatar' style={{backgroundImage: 
                                    `url(${user.avatarURL === '' ? icon : user.avatarURL})`
                                    }}>
                                </li>
                                <li>
                                    <NavLink to='/logout' activeClassName='active'>
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </Fragment>
                    }
            </nav>
        );
    }
}
function mapStateToProps({users, authedUser}) {
    return {
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(Nav);