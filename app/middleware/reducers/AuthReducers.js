import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_ATTEMPT,
} from './action/Types';

let initialState = {email: null, loading: false, error: null};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, email: action.email, error: null, loading: false};
        case LOGIN_ATTEMPT:
            return {...state, loading: true};
        case LOGIN_FAILED:
            return {...state, error: action.error, loading: false};
        default:
            return state;
    }
}