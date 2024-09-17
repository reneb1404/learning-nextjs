import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
