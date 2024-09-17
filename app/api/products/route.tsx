import ProductCard from "@/app/components/ProductCard";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
	const product = prisma.product.findMany();
	return NextResponse.json(product);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const valid = schema.safeParse(body);
	if (!valid.success)
		return NextResponse.json(valid.error.errors, { status: 400 });

	const newProduct = await prisma.product.create({
		data: {
			name: body.name,
			price: body.price,
		},
	});

	return NextResponse.json(newProduct);
}
