import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	resend.emails.send({
		from: "...",
		to: "renebucher1337@gmail.com",
		subject: "...",
		react: <WelcomeTemplate name="René" />,
	});

	return NextResponse.json({});
}
