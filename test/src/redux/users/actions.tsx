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
	error: null;
}

export function dataRequest() {
	return {
		type: actionTypes.DATA_REQUEST
	};
}

export function dataSuccess(dataUsers: Users) {
	return {
		type: actionTypes.DATA_SUCCESS,
		payload: dataUsers
	};
}

export function dataFailure(errorMessage: Users) {
	return {
		type: actionTypes.DATA_FAILURE,
		payload: errorMessage.error
	};
}

// export function fetchData(): Promise<Users> {
//     return async function(dispatch: any): Promise<any> {
//         dispatch(dataRequest());
//         try {
// 			let response = await axios.get(`${USERS_API}`);
// 			dispatch(dataSuccess(response.data));
// 		} catch (error) {
// 			const message = error.message;
// 			dispatch(dataFailure(message));
// 		}
//     }
// }
