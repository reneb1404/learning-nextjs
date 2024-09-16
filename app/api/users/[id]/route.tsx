import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
	params: { id: number };
}

export function GET(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	if (params.id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json({ id: 1, name: "René" });
}

//PUT for replacing an object
//PATCH for updating one or more properties

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	//validate the request body
	//If invalid, return 400
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });
	//Fetch the user with the given id
	//If doesn't exist, return 404
	if (params.id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	//Update User
	//Return the updates user
	return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	if (params.id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });

	return NextResponse.json({});
}
