import { Schema } from "mongoose";

export default new Schema({
	_id: {
		type: String,
	},
	prefix: {
		type: String,
		default: "-",
	},
	osu: {
		type: Object,
		default: {
			embeds: {
				beatmap: true,
				user: true,
				discussion: true,
			},
		},
	},
	channels: {
		type: Object,
		default: {
			join: undefined,
			leave: undefined,
			logs: undefined,
		},
	},
	fun: {
		type: Object,
		default: {
			enable: true,
			mode: "default",
			word: "axer",
			chance: 100,
			blacklist: {
				channels: [],
				words: [],
			},
		},
	},
	cooldown: {
		type: Object,
		default: {
			contests: {
				size: 0,
				ends_at: {},
				current_increments: 0,
				increments: 0,
				channels: [],
			},
			fun: {
				size: 0,
				ends_at: {},
				current_increments: 0,
				increments: 0,
				channels: [],
			},
			misc: {
				size: 0,
				ends_at: {},
				current_increments: 0,
				increments: 0,
				channels: [],
			},
			management: {
				size: 0,
				ends_at: {},
				current_increments: 0,
				increments: 0,
				channels: [],
			},
			osu: {
				size: 0,
				ends_at: {},
				current_increments: 0,
				increments: 0,
				channels: [],
			},
		},
	},
	messages: {
		type: Object,
		default: {
			join: {
				content: "",
				embeds: [
					{
						author: {
							name: "Welcome {username}! 👋",
							icon: "{user_avatar}",
							colour: "#37afc6",
						},
						description: "Welcome to the server {username}",
					},
				],
			},
			leave: {
				content: "",
				embeds: [
					{
						author: {
							name: "Oh no, bye {username}!",
							icon: "{user_avatar}",
							colour: "#37afc6",
						},
						description: "Oh, {username} has left the server...",
					},
				],
			},
		},
	},
	autorole: {
		users: [],
		bot: [],
	},
	logging: {
		type: Object,
		default: {
			enable: false,
			channel: "",
		},
	},
});
