import { Request, Response } from "express";
import * as database from "./../../database";
import fetch from "node-fetch";
import createNewUser from "../../database/utils/createNewUser";

export default async (req: Request, res: Response) => {
	// https://discord.com/api/oauth2/authorize?client_id=716648697408258069&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthenticate&response_type=code&scope=identify%20guilds%20guilds.members.read

	try {
		const code = req.query["code"] || "undefined";

		if (!code || code == "undefined")
			return res.status(400).send({
				status: 400,
				message: "Invalid code provided.",
			});

		const request = await fetch("https://discord.com/api/oauth2/token", {
			method: "POST",
			body: new URLSearchParams({
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				code: code.toString(),
				grant_type: "authorization_code",
				redirect_uri: process.env.REDIRECT_URI,
				// scope: "identify+guilds+guilds.members.read",
			}),
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});

		const response: any = await request.json();

		if (request.status != 200) {
			console.log(response);
			return res.status(request.status).send({
				status: request.status,
				message: `Request failed with code ${request.status}`,
			});
		}

		const user_request = await fetch(
			"https://discord.com/api/v9/users/@me",
			{
				method: "get",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					authorization: `Bearer ${response.access_token}`,
				},
			}
		);

		const user_response: any = await user_request.json();

		const user = await database.users.findById(user_response.id);

		if (user == null) await createNewUser(user_response);

		await database.users.findByIdAndUpdate(user_response.id, {
			discord_auth: response,
		});

		return res.status(200).send(`
		<script type="text/javascript">

			const data = ${JSON.stringify(response)}
			
			localStorage["discord_data"] = JSON.stringify(${JSON.stringify(response)})

			window.location.replace("/dashboard")
		</script>`);
	} catch (e: any) {
		console.log(e);

		return res.status(500).send({
			status: 500,
			message: "Internal server error.",
			data: e,
		});
	}
};
