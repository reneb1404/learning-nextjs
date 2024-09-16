import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "René" },
		{ id: 2, name: "Pete" },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
