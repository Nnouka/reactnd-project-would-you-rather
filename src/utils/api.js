import {_getUsers, _saveUser, _getQuestions} from './_DATA';

export function getUsers() {
    return _getUsers();
}

export function saveUser(user) {
    return _saveUser(user);
}

export function getQuestions() {
    return _getQuestions();
}

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }