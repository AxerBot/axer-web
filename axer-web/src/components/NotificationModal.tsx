import { Stack, Alert } from "@mui/material";
import { useContext, useEffect } from "react";
import { AlertsContext } from "./../providers/NotificationsContext";

export default () => {
	const { alerts, setAlerts } = useContext(AlertsContext);

	const _alerts = alerts.map((n: any) => {
		return (
			<Alert severity={n.severity} key={String(Math.random())}>
				{n.content}
			</Alert>
		);
	});

	useEffect(() => {
		removeAlert();
	}, [_alerts]);

	function removeAlert() {
		setTimeout(() => {
			alerts.shift();
			setAlerts(alerts);
		}, 8000);
	}

	return (
		<>
			<Stack
				spacing={2}
				sx={{ maxWidth: 600, margin: 5, position: "fixed", bottom: 0 }}
			>
				{_alerts[0] ? _alerts[0] : <></>}
			</Stack>
		</>
	);
};
