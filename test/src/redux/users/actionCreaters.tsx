import * as actionTypes from './actionTypes';
import axios from 'axios';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

interface Users {
	id: string;
	name: string;
	username: string;
	email: string;
	adress: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
	};
}

type allUsers = {
	usersData: [];
};

interface Components {
	type: string;
	payload: [];
	error: null;
	dispatchType: any;
}

export function dataRequest() {
	return {
		type: actionTypes.DATA_REQUEST
	};
}

export function dataSuccess(allUsers: Users) {
	return {
		type: actionTypes.DATA_SUCCESS,
		allUsers
	};
}

export function dataFailure(errorMessage: Components) {
	return {
		type: actionTypes.DATA_FAILURE,
		payload: errorMessage.error
	};
}

export function fetchData() {
	return async function(dispatch: any) {
		dispatch(dataRequest());
		try {
			const respone: any = await axios.get(`${USERS_API}`);
			dispatch(dataSuccess(respone));
		} catch (error) {
			dispatch(dataFailure(error));
		}
	};
}
