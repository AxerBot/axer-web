export default () => {
	const guild = JSON.parse(sessionStorage["current_guild"]).guild.id;

	fetch(`/api/guild/${guild}`, {
		headers: {
			authorization: JSON.parse(localStorage["discord_data"] || "{}")
				.access_token,
		},
	})
		.then((r) => {
			return r.json();
		})
		.then((d) => {
			if (d.status != 302) return;

			sessionStorage["current_guild"] = JSON.stringify(d.data);
		});
};
