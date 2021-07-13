import { combineReducers } from 'redux';
import usersReducer from './reducers/userReducer';

export const rootReducer = combineReducers({
	data: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
