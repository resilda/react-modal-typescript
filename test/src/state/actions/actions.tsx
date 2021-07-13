import * as actionTypes from './actionTypes';
import axios from 'axios';
import { Users, Components } from '../propsTypes/propsTypes';

const USERS_API = process.env.USERS_API;

export function dataRequest() {
	return {
		type: actionTypes.DATA_REQUEST
	};
}

export function dataSuccess(users: Users) {
	return {
		type: actionTypes.DATA_SUCCESS,
		users
	};
}

export function dataFailure(errorMessage: Components) {
	return {
		type: actionTypes.DATA_FAILURE,
		payload: errorMessage.error
	};
}

export function fetchData() {
	return async function (dispatch: any) {
		dispatch(dataRequest());
		try {
			const response: any = await axios.get(`${USERS_API}`);
			dispatch(dataSuccess(response));
		} catch (error) {
			dispatch(dataFailure(error));
		}
	};
}
