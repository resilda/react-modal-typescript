interface user {
	id: string;
	name: string;
	lastName: string;
	age?: number;
	employed: boolean | true | false;
}

interface allUsers extends Array<user> {}

function UserData() {
	var userData = [
		{ id: '1', name: 'dskf', lastName: 'hasd', employed: true },
		{ id: '2', name: 'dskf', lastName: 'hasd', age: 34, employed: true },
		{ id: '3', name: 'dskf', lastName: 'hasd', employed: false },
		{ id: '4', name: 'dskf', lastName: 'hasd', age: 34, employed: true },
		{ id: '5', name: 'dskf', lastName: 'hasd', employed: false },
		{ id: '6', name: 'dskf', lastName: 'hasd', age: 34, employed: true },
		{ id: '7', name: 'dskf', lastName: 'hasd', employed: false }
	];

	function printData(userData: allUsers): Array<user> {
		return userData;
	}

	function filterData() {
		const filteredUsers = userData.filter((item) => {
			return item.age;
		});
		return filteredUsers;
	}

	printData(userData);
	filterData();

	return (
		<div>
			{userData.map((element) => (
				<div key={element.id}>
					<h3>{element.name}</h3>
					<h3>{element.lastName}</h3>
					<h3>{element.age}</h3>
					<h3>{element.employed}</h3>
				</div>
			))}
		</div>
	);
}

export default UserData;
