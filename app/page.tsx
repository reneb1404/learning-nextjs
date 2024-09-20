import { auth } from "@/auth";
import { Metadata } from "next";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
	const session = await auth();
	return (
		<main className="relative h-screen">
			<div>Hello {session && <span>{session.user!.name}</span>}</div>
			<Link href="/users">Users</Link>
			<ProductCard />
		</main>
	);
}

//example
export async function generateMetadata(): Promise<Metadata> {
	const product = await fetch("");

	return {
		title: "product.title",
		description: "product.description",
	};
}
