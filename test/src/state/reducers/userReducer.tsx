import * as actionTypes from '../actions/actionTypes';
import { InitialStateProps } from '../propsTypes/propsTypes';

const initialState: InitialStateProps = {
	loading: false,
	userData: [],
	error: null
};

function usersReducer(state = initialState, action: any) {
	if (action.type === actionTypes.DATA_REQUEST) {
		return {
			...state,
			loading: true
		};
	}

	if (action.type === actionTypes.DATA_SUCCESS) {
		return {
			...state,
			loading: false,
			userData: action.payload
		};
	}

	if (action.type === actionTypes.DATA_FAILURE) {
		return {
			...state,
			userData: [],
			error: action.payload
		};
	}

	return state;
}

export default usersReducer;
