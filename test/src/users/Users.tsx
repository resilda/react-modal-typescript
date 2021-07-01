import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
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

	// const req = { url: "https://jsonplaceholder.typicode.com/users", method: "GET" } as const;
	// handleRequest(req.url, req.method);

	async function requestUsers(): Promise<User[]> {
		const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((res) => {
			return res as User[];
		});
		return data;
	}

	const allUsers = requestUsers();
	console.log('allUsers', allUsers);

	return <div>hi</div>;
}
