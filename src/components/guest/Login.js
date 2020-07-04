import React, {Component} from 'react';
import { connect } from 'react-redux';
import Impersonator from './Impersonator';
import NewUser from './NewUser';

class Login extends Component {
    IMPERSONATE = 'IMPERSONATE';
    NEW_USER = 'NEW_USER';
    state = {
        active: this.IMPERSONATE
    }
    handleActiveStateChange(active) {
        this.setState(() => ({active}))
    }
    render() {
        const {active} = this.state;
        return (
            <div className='card shadow'>
                <div className='card-header center logo-bg'>
                        <h2>Welcome to The Would You Rather App</h2>
                        <p>Please sign in to continue</p>
                    </div>
                <div className='card-content'>
                    <ul className='nav nav-tabs'>
                        <li 
                        className={active === this.IMPERSONATE ? 'active' : ''}
                        onClick={() => this.handleActiveStateChange(this.IMPERSONATE)}
                        >
                            Impersonate
                        </li>
                        <li 
                        className={active === this.NEW_USER ? 'active' : ''}
                        onClick={() => this.handleActiveStateChange(this.NEW_USER)}
                        >
                            New User
                        </li>
                    </ul>
                    {active === this.IMPERSONATE 
                    ? <Impersonator intendedUrl={this.props.intendedUrl} /> 
                    : <NewUser intendedUrl={this.props.intendedUrl} />}
                </div>
            </div>
        );
    }
}
function mapStateToProps({authedUser}, {intendedUrl}) {
    return {
        authedUser,
        intendedUrl
    }
}
export default connect(mapStateToProps)(Login);