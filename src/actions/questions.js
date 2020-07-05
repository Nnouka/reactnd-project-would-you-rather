import {getQuestions, saveAnswer, saveQuestion} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE_QUESTION = 'VOTE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

function voteQuestion (vote) {
    return {
        type: VOTE_QUESTION,
        vote
    }
}

export function handleVoteQuestion (qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());

        return saveAnswer({ authedUser, qid, answer })
        .then(() => {
           return dispatch(voteQuestion({ authedUser, qid, answer }))
        })
        .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions().then(questions => {
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion(question).then(savedQ => {
            dispatch(addQuestion(savedQ));
            dispatch(hideLoading());
        })
    }
}