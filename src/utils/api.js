import {
  _getUsers,
  _saveUser,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA';

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

  export function saveAnswer(vote) {
     return _saveQuestionAnswer(vote);
  }

  export function saveQuestion(question) {
      return _saveQuestion(question);
  }