export default (guild: string) => {
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

			window.location.replace(`/dashboard/${guild}/general`);
		});
};
