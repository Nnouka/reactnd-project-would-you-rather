import {_getUsers, _saveUser} from './_DATA';

export function getUsers() {
    return _getUsers();
}

export function saveUser(user) {
    return _saveUser(user);
}