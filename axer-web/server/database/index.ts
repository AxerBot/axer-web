import mongoose from "mongoose";
import guild from "./schemas/guild";
import user from "./schemas/user";
import dotenv from "dotenv";
dotenv.config();

console.log("Starting databse connection...");

mongoose.connect(
	`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
	(err) => {
		if (err)
			return console.log("An error has occurred:\n".concat(err.message));

		console.log("Database connected!");
	}
);

export const users = mongoose.model("Users", user);
export const guilds = mongoose.model("Guilds", guild);
