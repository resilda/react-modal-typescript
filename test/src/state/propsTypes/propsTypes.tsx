//Reducer Types

export interface InitialStateProps {
	loading: boolean;
	userData: Array<any>;
	error: null;
}

//Action Types

interface User {
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

export interface Users {
	users: User[];
};

export interface Components {
	type: string;
	payload: [];
	error: null;
	dispatchType: any;
}

//Global State

export interface IGlobalState {
	initialStateProps: InitialStateProps;
	users: Users;
	components: Components;
}