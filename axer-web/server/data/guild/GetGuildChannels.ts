import { Request, Response } from "express";
import fetch from "node-fetch";

export default async (req: Request, res: Response) => {
	try {
		const guild_id = req.params["guild"] || "69";

		const request = await fetch(
			`https://discord.com/api/v9/guilds/${guild_id}/channels`,
			{
				method: "get",
				headers: {
					authorization: `Bot ${process.env.BOT_TOKEN}`,
				},
			}
		);

		const response = await request.json();

		return res.status(302).send({
			status: 302,
			message: "Found",
			data: response,
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
