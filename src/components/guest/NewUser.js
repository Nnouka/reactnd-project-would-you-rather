import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../../actions/users';
import { withRouter } from 'react-router-dom';
import { TiTick, TiTimes} from 'react-icons/ti'


class NewUser extends Component {
    state = {
        username: '',
        name: '',
    };
    handleUsernameInput = (e) => {
        let username = e.target.value;
        username = username.replace(' ', '_');
        this.setState((prevState) => ({
            ...prevState,
            username
        }));
    }

    handleNameInput = (e) => {
        const name = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            name
        }));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {username, name} = this.state;
        const {dispatch, history, intendedUrl} = this.props;

        dispatch(handleAddUser({username, name}));

        this.setState(() => ({username: '', name: ''}));


        const redirectUrl = intendedUrl === undefined ? '/home' : intendedUrl;
        console.log('redirecting to', redirectUrl);
        history.push(redirectUrl);
    }
    isUsernameUsed(username) {
        return Object.keys(this.props.users).findIndex(f => f === username) > -1;
    }
    render() {
        const {username, name} = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input type='text' 
                        placeholder='Enter a username' 
                        onInput={this.handleUsernameInput} 
                        value={username}
                        onChange={this.handleUsernameInput}
                        />
                    {
                        username === '' ? '' : (
                                this.isUsernameUsed(username)
                                ? <TiTimes className='login-icon thumbs-down'/> 
                                : <TiTick className='login-icon thumbs-up' />
                        )
                    }
                    <input type='text' 
                        placeholder='Enter a name' 
                        onInput={this.handleNameInput} 
                        value={name} 
                        onChange={this.handleNameInput} />
                </div>
                <div className='form-group'>
                    <button 
                        type='submit' 
                        className='btn'
                        disabled={username === '' || name === '' || this.isUsernameUsed(username)}
                        >
                            Signin 
                    </button>
                </div>
            </form>
        );
    }
}

function mapStateToProps({users}, {intendedUrl}) {
    return {
        users,
        intendedUrl
    }
}
export default withRouter(connect(mapStateToProps)(NewUser));