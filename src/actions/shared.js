import {getInitialData} from '../utils/api';
import {receiveUsers} from '../actions/users';
import {receiveQuestions} from '../actions/questions';
import {showLoading, hideLoading} from 'react-redux-loading';


export function handleInitialData() {
    return (dispactch) => {
        dispactch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispactch(receiveUsers(users));
                dispactch(receiveQuestions(questions));
                dispactch(hideLoading());
            })
    }
}