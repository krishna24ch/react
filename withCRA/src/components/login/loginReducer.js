// import { hashHistory } from 'react-router';
import { authenticateUser } from './loginServces';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

const initialState = {
    userName: '',
    password: '',
    loading: false,
    loggedInUser: {},
    error: '',
}

export default (state = initialState, { payload, type }) => {
    switch(type) {
    case LOGIN_PENDING:
        return {
            ...state,
            loading: true,
        }
    case LOGIN_FULFILLED:
        return {
            ...state,
            loading: false,
            loggedInUser: payload.data.user,
        }
    case LOGIN_REJECTED:
        return {
            ...state,
            loading: false,
            error: payload.data.error,
        }        

    default: {
        return state
    }
    }  
}

export function submitLogin(user) {
    return {type: "LOGIN", payload: authenticateUser(user).then(() => {
        // hashHistory.push('/dashboard')
    })}
}