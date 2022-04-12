export default () => {
	let config: any = {
		misc: {
			channels: [],
			ends_at: {},
			size: 0,
			current_increments: {},
			increments: 0,
		},
		osu: {
			channels: [],
			ends_at: {},
			size: 0,
			current_increments: {},
			increments: 0,
		},
		fun: {
			channels: [],
			ends_at: {},
			size: 0,
			current_increments: {},
			increments: 0,
		},
		contests: {
			channels: [],
			ends_at: {},
			size: 0,
			current_increments: {},
			increments: 0,
		},
		management: {
			channels: [],
			ends_at: {},
			size: 0,
			current_increments: {},
			increments: 0,
		},
	};

	const categories = ["misc", "osu", "fun", "contests", "management"];

	const current_guild = JSON.parse(sessionStorage["current_guild"]);

	Object.keys(current_guild.configuration.cooldown).forEach(
		(category: any) => {
			if (
				current_guild.configuration.cooldown[category].channels.length <
				1
			)
				return;

			config[category] = current_guild.configuration.cooldown[category];
		}
	);

	return config;
};
