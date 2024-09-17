export { auth as middleware } from "@/auth";

export const config = {
	// *: zero or more
	// +: one or more
	// ?: zero or one
	matcher: ["/users/:id*"],
};
