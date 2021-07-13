import * as actionTypes from './actionTypes';
import axios from 'axios';

// const USERS_API = process.env.REACT_APP_USERS_API;

export function dataRequest() {
	return {
		type: actionTypes.DATA_REQUEST
	};
}

export function dataSuccess(userData: Array<any>) {
	return {
		type: actionTypes.DATA_SUCCESS,
		payload: userData
	};
}

export function dataFailure(error: null) {
	return {
		type: actionTypes.DATA_FAILURE,
		payload: error
	};
}

export function fetchData() {
	return async function(dispatch: any) {
		dispatch(dataRequest());
		try {
			const response: any = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch(dataSuccess(response.data));
		} catch (error) {
			dispatch(dataFailure(error));
		}
	};
}
