import * as actionTypes from '../actions/actionTypes';
import { InitialStateProps } from '../propsTypes/propsTypes';

const initialState: InitialStateProps = {
	loading: false,
	userData: [],
	error: null,
	filteredValue: ''
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

	if (action.type === actionTypes.FILTER_USERS) {
		return {
			...state,
			filteredValue: action.payload
		}
	}

	return state;
}

export default usersReducer;
