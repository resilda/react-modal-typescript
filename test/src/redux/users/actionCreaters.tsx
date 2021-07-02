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

// export function fetchData() {
// 	return async function(request: any, response: Array<Users>, dispatch: any) {
// 		dispatch(dataRequest())
// 		return new Promise((resolve: any, reject)) => {
// 			request.get(`${USERS_API}`, function(error, response, body) {

// 			})
// 		}
// 		// try {
// 		// 	response = await axios.get(`${USERS_API}`);
// 		// 	dispatch(dataSuccess(response.JSON))
// 		// }
// 		// catch{

// 		// }
// 	};
// }

export function fetchData() {
	return async function(response: Array<Users>, dispatch: any) {
		dispatch(dataRequest());
		try {
			respone = 
		}
	}
}

// function registerCustomerApi(companyId: String, dateOfBirth: String, mobileNo: String) {
//     return new Promise((resolve, reject) => {
//         request.get(`http://localhost:57580/api/aes_brand/customer/validate_customer/SG01/1990-01-01/8299687`, function (error, response, body) {
//             if(error) {
//                 reject(error);
//             } else {
//                 resolve(body)
//             }
//         })
//     })
// }
