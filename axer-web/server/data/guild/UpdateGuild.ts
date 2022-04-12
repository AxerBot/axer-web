import { Request, Response } from "express";
import * as database from "../../database";
import { parsePermissionBitfield } from "./../../../src/helpers/CalculatePermissions";
import fetch from "node-fetch";
import UpdateGuildPrefix from "./helpers/UpdateGuildPrefix";

const AvaliableConfigurations = {
	prefix: UpdateGuildPrefix,
};

export default async (req: Request, res: Response) => {
	try {
		const guild_id = req.params["guild"] || "69";
		const authorization = req.headers.authorization;
		let body = req.body;

		const user = await database.users.findById(body.user_id);

		console.log(user);

		if (user == null)
			return res.status(400).send({
				status: 400,
				message: "Invalid author",
			});

		if (!guild_id)
			return res.status(400).send({
				status: 400,
				message: "Invalid author",
			});

		if (!authorization || authorization != user.discord_auth.access_token)
			return res.status(401).send({
				status: 401,
				message: "Unauthorized",
			});

		async function checkRequestedGuildPermissions() {
			const guilds = await fetch(
				"https://discord.com/api/v9/users/@me/guilds",
				{
					method: "get",
					headers: {
						authorization: `Bearer ${authorization}`,
					},
				}
			);

			const response: any = await guilds.json();

			if (response.length < 1) return false;

			const guild = response.filter((g: any) => g.id == guild_id)[0];

			if (!guild) return false;

			const moderation_permissions = [
				"ADMINISTRATOR",
				"MANAGE_CHANNELS",
				"MANAGE_GUILD",
				"MANAGE_MESSAGES",
				"MODERATE_MEMBERS",
			];

			let pass = false;

			parsePermissionBitfield(guild.permissions).forEach((permission) => {
				if (moderation_permissions.includes(permission)) pass = true;
			});

			return pass;
		}

		if (!(await checkRequestedGuildPermissions()))
			return res.status(401).send({
				status: 401,
				message: "Invalid guild permissions",
			});

		if (!Object.keys(AvaliableConfigurations).includes(body.scope))
			res.status(422).send({
				status: 422,
				message: "Invalid configuration scope provided",
			});

		AvaliableConfigurations[body.scope](req, res);
	} catch (e: any) {
		console.log(e);

		return res.status(500).send({
			status: 500,
			message: "Internal server error.",
			data: e,
		});
	}
};
