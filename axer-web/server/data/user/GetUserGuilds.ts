import { Request, Response } from "express";
import fetch from "node-fetch";

export default async (req: Request, res: Response) => {
	try {
		const authorization = req.headers.authorization;

		if (!authorization)
			return res.status(401).send({
				status: 401,
				message: "Unauthorized",
			});

		const request = await fetch(
			"https://discord.com/api/v9/users/@me/guilds",
			{
				method: "get",
				headers: {
					authorization: `Bearer ${authorization}`,
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
