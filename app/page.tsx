import { auth } from "@/auth";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
	const session = await auth();
	return (
		<main>
			<div>Hello {session && <span>{session.user!.name}</span>}</div>
			<Link href="/users">Users</Link>
			<ProductCard />
		</main>
	);
}
