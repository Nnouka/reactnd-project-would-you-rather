import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';
import { TiTick, TiTimes} from 'react-icons/ti'


class NewUser extends Component {
    state = {
        username: '',
        name: '',
    };
    handleUsernameInput = (e) => {
        const username = e.target.value;
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
        const {dispatch} = this.props;

        dispatch(handleAddUser({username, name}));

        this.setState(() => ({username: '', name: ''}));
    }
    isUsernameUsed(username) {
        return Object.keys(this.props.users).find(f => f === username);
    }
    render() {
        // const {users} = this.props;
        const {username, name} = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input type='text' placeholder='Enter a username' onInput={this.handleUsernameInput} />
                    {
                        username === '' ? '' : (
                                this.isUsernameUsed(username)
                                ? <TiTimes className='login-icon thumbs-down'/> 
                                : <TiTick className='login-icon thumbs-up' />
                        )
                    }
                    <input type='text' placeholder='Enter a name' onInput={this.handleNameInput} />
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

function mapStateToProps({users}) {
    return {
        users
    }
}
export default connect(mapStateToProps)(NewUser);