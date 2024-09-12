import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store", //disable caching
	});
	const users: User[] = await res.json();

	const sortedUsers = sort(users).asc(
		sortOrder === "email" ? (user) => user.email : (user) => user.name
	);

	return (
		<div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>
							<Link href="/users?sortOrder=name">Name</Link>
						</th>
						<th>
							<Link href="/users?sortOrder=email">Email</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user) => (
						<tr key={user.id}>
							<th>{user.name}</th>
							<th>{user.email}</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
