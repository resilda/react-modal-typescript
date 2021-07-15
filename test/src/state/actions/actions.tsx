import * as actionTypes from './actionTypes';
import axios from 'axios';

const USERS_API = process.env.REACT_APP_USERS_API;

export function dataRequest() {
	return {
		type: actionTypes.DATA_REQUEST
	};
}

// const apiAction = (id: any) => (dispatch, getState) => {

// }

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

export function filterUser(filterValue: any) {
	return {
		type: actionTypes.FILTER_USERS,
		payload: filterValue
	}
}

export function addPost(id: any, title: string, body: string) {
	return {
		type: actionTypes.ADD_POST,
		payload: {
			id: id,
			title: title,
			body: body
		}
	}
}

export function removePost(id: any) {
	return {
		type: actionTypes.REMOVE_POST,
		payload: {
			id: id
		}
	}
}

export function fetchData() {
	return async function (dispatch: any) {
		dispatch(dataRequest());
		try {
			const response: any = await axios.get(`${USERS_API}`);
			dispatch(dataSuccess(response.data));
		} catch (error) {
			dispatch(dataFailure(error));
		}
	};
}
