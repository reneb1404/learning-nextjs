import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
	params: { id: number };
}

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const user = await prisma.user.findUnique({
		where: { id: parseInt(params.id) },
	});
	if (!user)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json(user);
}

//PUT for replacing an object
//PATCH for updating one or more properties

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	//validate the request body
	//If invalid, return 400
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });

	const user = await prisma.user.findUnique({
		where: { id: parseInt(params.id) },
	});
	//Fetch the user with the given id
	//If doesn't exist, return 404
	if (!user)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	//Update User
	//Return the updates user
	const updateUser = prisma.user.update({
		where: { id: user.id },
		data: {
			name: body.name,
			email: body.email,
		},
	});

	return NextResponse.json(updateUser);
}

export function DELETE(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	if (params.id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });

	return NextResponse.json({});
}
