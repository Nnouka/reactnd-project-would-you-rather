import React, {Component} from 'react';
import { connect } from 'react-redux';
import Impersonator from './Impersonator';
import NewUser from './NewUser';

class Login extends Component {
    IMPERSONATE = 'IMPERSONATE';
    NEW_USER = 'NEW_USER';
    componentDidMount() {
        
    }
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
                        <h3>Welcome to The Would You Rather App</h3>
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
                    {active === this.IMPERSONATE ? <Impersonator /> : <NewUser />}
                </div>
            </div>
        );
    }
}

export default connect()(Login);