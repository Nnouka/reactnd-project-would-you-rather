import { SET_AUTHED_USER } from '../actions/authedUser'
const check = (store) => (next) => (action) => {

    // check if action is setAuth user
    if(action.type === SET_AUTHED_USER) {
        return next(action);
    } else {
        
    }

}

export default check;