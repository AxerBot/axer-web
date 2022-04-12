import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import HomeHeader from "../../components/HomeHeader";
import SearchInput from "../../components/SearchInput";
import ServerSelector from "../../components/Dashboard/ServerSelector";
import GetManageableGuilds from "../../helpers/GetManageableGuilds";

export default () => {
	const [guildsResponse, setGuildsResponse] = useState<any[]>([]);

	useEffect(() => {
		fetch("/api/@me/guilds", {
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

				console.log(d.data);

				setGuildsResponse(GetManageableGuilds(d.data));
			});
	}, []);

	return (
		<div className="App">
			<HomeHeader></HomeHeader>
			<Box
				sx={{
					width: "100%",
					height: 40,
					margin: "2em 0",
				}}
			>
				<SearchInput
					onInput={() => {
						alert("eae");
					}}
				></SearchInput>
			</Box>
			<Box
				sx={{
					width: "auto",
					margin: "24px",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "flex-start",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					"@media (max-width: 560px)": {
						flexDirection: "column",
						flexWrap: "nowrap",
						alignContent: "center",
						justifyContent: "flex-start",
						alignItems: "center",
					},
				}}
			>
				{guildsResponse.map((_guild: any) => {
					return (
						<ServerSelector
							data={_guild}
							key={_guild.id}
						></ServerSelector>
					);
				})}
			</Box>
		</div>
	);
};
