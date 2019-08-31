import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from './Types';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

let handleResponse = (response, dispatch) => {
    if (response.status === 'success') {
        AsyncStorage.multiSet([['app_token', response.token], ['email', response.email]]);
        dispatch({type: LOGIN_SUCCESS, email: response.email});
        return true;
    }
    dispatch({type: LOGIN_FAILED, error: true});
};
export const authenticateUsers = ({email, password}) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_ATTEMPT});
        // fetching data
        // on success [status => success,email,token]
        // on failed [status => failed,message]
        axios.post('https://tonsoftours.com/MeatProjectTesting/test/public/login/json', {
            email,
            password,
        }).then((response) => handleResponse(response.data, dispatch))
            .catch((error) => dispatch({type: LOGIN_FAILED, error: error}));
    };
};
