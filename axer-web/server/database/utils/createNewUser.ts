import * as database from "./../";
import crypto from "crypto";

export default async function createNewUser(user_data: any) {
	console.log("Creating a new user.");

	const u = new database.users({
		_id: user_data.id,
		discord_auth: {
			access_token: crypto.randomBytes(30).toString("hex"),
			expires_in: 604800,
			refresh_token: crypto.randomBytes(30).toString("hex"),
			scope: "guilds.members.read identify connections guilds messages.read",
			token_type: "Bearer",
		},
	});

	await u.save();

	const r = await database.users.findOne({ _id: u.id });

	console.log(`User ${u.id} created!`);

	return r;
}
