import { getUsers, saveUser } from '../utils/api';
import { setAuthedUser } from './authedUser';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER'; 


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser(user) {
    return (dispatch) => {
        return saveUser(user).then(saved => {
            dispatch(addUser(saved));
            dispatch(setAuthedUser(saved[user.username].id));
        });
    }
}

export function handleReceiveUsers() {
    return (dispatch) => {
        return getUsers().then(users => {
            dispatch(receiveUsers(users));
        });
    }
}

