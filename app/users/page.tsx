import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
}

const UserPage = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store", //disable caching
	});
	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>EMail</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<th>{user.name}</th>
							<th>{user.email}</th>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UserPage;
