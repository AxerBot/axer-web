import { Request, Response } from "express";
import * as database from "../../../database";

export default async (req: Request, res: Response) => {
	try {
		const { data } = req.body;

		if (!data)
			return res.status(422).send({
				status: 422,
				message: "Invalid prefix provided",
			});

		if (data.length > 3)
			return res.status(422).send({
				status: 422,
				message: "Prefix size can't be bigger than 3 characters",
			});

		let guild = await database.guilds.findById(req.params["guild"]);

		if (guild == null)
			return res.status(400).send({
				status: 400,
				message: "Unknown guild",
			});

		guild.prefix = decodeURI(data);

		await database.guilds.findByIdAndUpdate(req.params["guild"], guild);

		return res.status(200).send({
			status: 200,
			message: "Guild prefix updated!",
		});
	} catch (e: any) {
		console.error(e);

		return res.status(500).send({
			status: 500,
			message: "Internal server error",
		});
	}
};
