import { Schema } from "mongoose";

export default new Schema({
	_id: {
		type: String,
	},
	discord_auth: {
		type: Object,
	},
	token: {
		type: String,
	},
	osu: {
		type: Object,
		default: {
			username: undefined,
			mode: undefined,
		},
	},
});
