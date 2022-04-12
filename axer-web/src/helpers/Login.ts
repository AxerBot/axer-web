export function signOut() {
	delete localStorage["discord_data"];

	window.location.replace("/");
}

export function startLoginSession() {
	window.location.href =
		"https://discord.com/api/oauth2/authorize?client_id=962723465700454402&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthenticate&response_type=code&scope=identify%20guilds%20guilds.members.read%20messages.read";
}

export function getLoginCredentials() {
	let d;
	try {
		d = JSON.parse(localStorage["discord_data"]);

		return d;
	} catch (e) {
		return {};
	}
}
