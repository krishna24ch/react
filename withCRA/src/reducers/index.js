import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import login from '../components/login/loginReducer'

export default combineReducers({
    login,
    routing: routerReducer,
})