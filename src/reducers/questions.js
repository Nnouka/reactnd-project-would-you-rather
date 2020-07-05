import {RECEIVE_QUESTIONS, VOTE_QUESTION, ADD_QUESTION} from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        case VOTE_QUESTION :
            const {vote} = action;
            return {
                ...state,
                [vote.qid]: {
                    ...state[vote.qid],
                    [vote.answer]: {
                      ...state[vote.qid][vote.answer],
                      votes: state[vote.qid][vote.answer].votes.concat([vote.authedUser])
                    }
                  }
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            };
        default :
            return state;
    }
}