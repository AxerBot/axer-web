import {
	Paper,
	Typography,
	Divider,
	Box,
	TextField,
	Button,
	Alert,
	Switch,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { AlertsContext } from "../../providers/NotificationsContext";
import UpdateCurrentGuildInfo from "../../helpers/UpdateCurrentGuildInfo";

export default () => {
	const [prefix, setPrefix] = useState("");
	const { alerts, setAlerts } = useContext(AlertsContext);

	console.log(alerts);

	useEffect(() => {
		try {
			const data = JSON.parse(sessionStorage["current_guild"]);
			setPrefix(data.configuration.prefix);
		} catch (e) {
			console.log(e);
		}
	}, []);

	function savePrefix() {
		const current_guild = JSON.parse(sessionStorage["current_guild"]).guild;

		fetch(`/api/guild/${current_guild.id}/update`, {
			headers: {
				"content-type": "application/json",
				authorization: JSON.parse(localStorage["discord_data"])
					.access_token,
			},
			body: JSON.stringify({
				user_id: JSON.parse(localStorage["discord_user"]).id,
				scope: "prefix",
				data: prefix,
			}),
			method: "post",
		})
			.then((r) => {
				return r.json();
			})
			.then((d) => {
				if (d.status != 200)
					return setAlerts([
						{ severity: "error", content: d.message },
					]);

				setAlerts([
					{ severity: "success", content: "Prefix updated!" },
				]);

				UpdateCurrentGuildInfo();
			});
	}

	return (
		<Box
			sx={{
				width: "90%",
				height: 200,
				margin: "25px",
				marginBottom: 0,
			}}
		>
			<Typography
				variant="h5"
				sx={{
					margin: "10px 0px",
					fontWeight: 500,
				}}
			>
				<PriorityHighIcon></PriorityHighIcon> General
			</Typography>
			<Divider variant="fullWidth" />
			<Box
				sx={{
					width: "100%",
					height: "fit-content",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					justifyContent: "flex-start",
					alignItems: "center",
					margin: "auto auto",
					marginTop: "10px",
				}}
			>
				<Box
					sx={{
						width: "95%",
						display: "flex",
						flexDirection: "row",
						flexWrap: "nowrap",
						alignContent: "center",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="subtitle1">Enable:</Typography>
					<Switch></Switch>
				</Box>
				<Box
					sx={{
						width: "95%",
						display: "flex",
						flexDirection: "row",
						flexWrap: "nowrap",
						alignContent: "center",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				></Box>
				<Button
					variant="contained"
					onClick={savePrefix}
					sx={{
						margin: "40px 0",
						marginLeft: "auto",
					}}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};
