import { auth } from "@/auth";
import korkut from "@/public/images/korkut-mamet.jpg";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
	const session = await auth();
	return (
		<main className="relative h-screen">
			<div>Hello {session && <span>{session.user!.name}</span>}</div>
			<Link href="/users">Users</Link>
			<ProductCard />
			<Image
				src="https://bit.ly/react-cover"
				alt="Korkut mamet"
				fill
				className="object-cover"
				sizes="(max-width: 480px) 100vw, (max-width: 768) 50vw, 33vw"
				quality={75}
				priority
			/>
		</main>
	);
}
