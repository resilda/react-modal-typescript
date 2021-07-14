import { combineReducers } from 'redux';
import usersReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';

export const rootReducer = combineReducers({
	data: usersReducer,
	post: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;
