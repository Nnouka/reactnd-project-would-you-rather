import {getQuestions} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
// export const TOGGLE_TWEET = 'TOGGLE_TWEET';
// export const ADD_TWEET = 'ADD_TWEET';

/*function addTweet (tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet (text, replyingTo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());

        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
        .then((tweet) => {
           return dispatch(addTweet(tweet))
        })
        .then(() => dispatch(hideLoading()))
    }
}
*/
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading())
        return getQuestions().then(questions => {
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading())
        });
    }
}

/*
function toggleTweet ({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info));
        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e);
                dispatch(toggleTweet(info));
                alert('There was an error liking tweet');
            });
    }
}*/