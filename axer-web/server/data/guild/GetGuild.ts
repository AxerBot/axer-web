import { Request, Response } from "express";
import * as database from "../../database";
import fetch from "node-fetch";

export default async (req: Request, res: Response) => {
	try {
		const guild_id = req.params["guild"] || "69";

		const request = await fetch(
			`https://discord.com/api/v9/guilds/${guild_id}`,
			{
				method: "get",
				headers: {
					authorization: `Bot ${process.env.BOT_TOKEN}`,
				},
			}
		);

		const response: any = await request.json();
		const configuration = await database.guilds.findById(response.id);

		const data = {
			guild: response,
			configuration: configuration,
		};

		return res.status(302).send({
			status: 302,
			message: "Found",
			data: data,
		});
	} catch (e: any) {
		console.log(e);

		return res.status(500).send({
			status: 500,
			message: "Internal server error.",
			data: e,
		});
	}
};
