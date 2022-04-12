import * as database from "..";

export default async function createNewGuild(guild_data: any) {
	console.log("Creating a new guild.");

	const g = new database.guilds({
		_id: guild_data.id,
	});

	await g.save();

	const r = await database.guilds.findOne({ _id: g.id });

	console.log(`guild ${g.id} created!`);

	return r;
}
