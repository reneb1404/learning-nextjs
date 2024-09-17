import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
	params: { id: string };
}

export async function GET(
	request: NextResponse,
	{ params }: { params: { id: string } }
) {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) },
	});
	if (!product)
		return NextResponse.json(
			{ error: "Product doesn't exist" },
			{ status: 404 }
		);

	return NextResponse.json(product);
}

export async function PUT(
	request: NextResponse,
	{ params }: { params: { id: string } }
) {
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });

	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!product)
		return NextResponse.json({ error: "Product not found" }, { status: 404 });

	const updateProduct = await prisma.product.update({
		where: { id: product.id },
		data: {
			name: body.name,
			price: body.price,
		},
	});

	return NextResponse.json(updateProduct);
}
export async function DELETE(
	request: NextResponse,
	{ params }: { params: { id: string } }
) {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!product)
		return NextResponse.json({ erorr: "Product not found" }, { status: 404 });

	const deleteProduct = await prisma.product.delete({
		where: { id: product.id },
	});

	return NextResponse.json(deleteProduct);
}
