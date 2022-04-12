// ? update localStorage['discord_user'] data
import { useEffect } from "react";

export default () => {
	useEffect(() => {
		fetch("/api/@me", {
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

				localStorage["discord_user"] = JSON.stringify(d.data);
			});
	}, []);

	return <></>;
};
