import { combineReducers } from 'redux';
import usersReducer from './users/userReducer';

const rootReducer = combineReducers({
	data: usersReducer
});

export default rootReducer;
