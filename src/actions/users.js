import { getUsers, saveUser } from '../utils/api';
import { setAuthedUser } from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';

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
        dispatch(showLoading())
        return saveUser(user).then(saved => {
            dispatch(addUser(saved));
            dispatch(setAuthedUser(saved[user.username].id));
            dispatch(hideLoading())
        });
    }
}

export function handleReceiveUsers() {
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers().then(users => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading())
        });
    }
}

