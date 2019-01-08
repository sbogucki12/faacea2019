import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import caseTypeReducer from './caseTypeReducer';

export default combineReducers({
    auth: authReducer, 
    user: userReducer, 
    caseType: caseTypeReducer
});