import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DashboardServerGeneral from "./DashboardServerGeneral";
import DashboardServerCooldown from "./DashboardServerCooldown";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const pages = [
		<DashboardServerGeneral></DashboardServerGeneral>,
		<DashboardServerCooldown></DashboardServerCooldown>,
	];

	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					background: "#00000021",
				}}
			>
				<Tabs value={value} onChange={handleChange}>
					<Tab
						label="General"
						{...a11yProps(0)}
						sx={{
							color: "#888",
						}}
					/>
					<Tab
						label="Cooldown"
						{...a11yProps(1)}
						sx={{
							color: "#888",
						}}
					/>
					<Tab
						label="osu!"
						{...a11yProps(2)}
						sx={{
							color: "#888",
						}}
					/>
					<Tab
						label="Logger"
						{...a11yProps(3)}
						sx={{
							color: "#888",
						}}
					/>
				</Tabs>
			</Box>
			<Box
				sx={{
					width: "100%",
					minHeight: 250,
				}}
			>
				{pages[value] || <></>}
			</Box>
		</Box>
	);
};
