import { combineReducers } from 'redux';
import usersReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    usersData: usersReducer as any
});

export default rootReducer

// export type RootState = ReturnType<typeof rootReducer>;
