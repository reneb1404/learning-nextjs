import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
	return (
		<main>
			<div>Hello World!</div>
			<Link href="/users">Users</Link>
			<ProductCard />
		</main>
	);
}
