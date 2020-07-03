import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Impersonator extends Component {
    state = {
        selectedUser: '0',
    };
    hendleChange = (e) => {
        const selectedUser = e.target.value;
        this.setState(() => ({selectedUser}));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {selectedUser} = this.state;
        const {dispatch} = this.props;

        dispatch(setAuthedUser(selectedUser));

        this.setState(() => ({selectedUser: '0'}));
    }
    render() {
        const {users} = this.props;
        const {selectedUser} = this.state;
        const btnStyle  = selectedUser === '0' ? {} : {
            backgroundImage: `url(${users[selectedUser].avatarURL})` ,
            backgroundSize: '50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left'
        }
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <select defaultValue={selectedUser} onChange={this.hendleChange}>
                        <option disabled value='0'>Select a user</option>
                        {
                            Object.keys(users).map((uid) => {
                                const user = users[uid];
                                const style = {
                                    backgroundImage: `url(${user.avatarURL})`
                                }
                                return (
                                    <option
                                    key={user.id} 
                                    value={user.id}
                                    className='image-bg'
                                    style={style}
                                    >
                                        {user.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn'
                     disabled={selectedUser === '0'}
                     style={btnStyle}>
                            Signin { selectedUser === '0' ? '' : `as ${users[selectedUser].name}`}
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
export default connect(mapStateToProps)(Impersonator);