import {RECEIVE_USERS, ADD_USER} from '../actions/users';
import {VOTE_QUESTION, ADD_QUESTION} from '../actions/questions';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        case ADD_USER :
            return {
                ...state,
                ...action.user
            }
        case VOTE_QUESTION :
            const {vote} = action;
            return {
                ...state,
                [vote.authedUser]: {
                    ...state[vote.authedUser],
                    answers: {
                        ...state[vote.authedUser].answers,
                        [vote.qid]: vote.answer
                    }
                }
            };
        case ADD_QUESTION :
            const authedUser = action.question.author;
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  questions: state[authedUser].questions.concat([action.question.id])
                }
              }
        default :
            return state;
    }
}