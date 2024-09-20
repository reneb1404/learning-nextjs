import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Tailwind,
	Text,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body className="bg-white">
					<Container>
						<Text className="font-bold text-3xl">Hello {name}!</Text>
						<Link href="www.google.de">www.google.com</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WelcomeTemplate;
