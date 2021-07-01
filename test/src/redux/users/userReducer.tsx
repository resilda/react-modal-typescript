import * as actionTypes from './actionTypes';

interface InitialState {
	loading: boolean;
	userData: Array<any>;
	error: null;
}

export default function usersReducer(state: InitialState, action: any) {
	switch (action.type) {
		case actionTypes.DATA_REQUEST:
			return {
				...state,
				loading: true
			};
		case actionTypes.DATA_SUCCESS:
			return {
				...state,
				loading: false,
				userData: action.payload
			};
		case actionTypes.DATA_FAILURE:
			return {
				...state,
				userData: Array,
				error: action.payload
			};
	}
}
