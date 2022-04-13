import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import BuildIcon from "@mui/icons-material/Build";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TimerIcon from "@mui/icons-material/Timer";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DashboardServerCooldown from "../../pages/Dashboard/DashboardServerCooldown";
import DashboardServerGeneral from "../../pages/Dashboard/DashboardServerGeneral";

const drawerWidth = 240;

export default () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const pages = [
		{
			title: "General",
			element: <DashboardServerGeneral></DashboardServerGeneral>,
		},
		{
			title: "Cooldown",
			element: <DashboardServerCooldown></DashboardServerCooldown>,
		},
	];

	const [page, setPage] = React.useState(pages[0]);

	function selectPage(index: number) {
		setPage(pages[index]);
	}

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{[
					{ text: "General", icon: BuildIcon },
					{ text: "Cooldown", icon: TimerIcon },
					{ text: "Osu!", icon: GamepadIcon },
					{ text: "Quotes", icon: FormatQuoteIcon },
				].map((option, index) => (
					<ListItem
						button
						key={option.text}
						onClick={() => {
							selectPage(index);
						}}
					>
						<ListItemIcon>
							{<option.icon></option.icon>}
						</ListItemIcon>
						<ListItemText primary={option.text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{[
					{ text: "Home", icon: HomeIcon },
					{ text: "Server Selection", icon: ManageSearchIcon },
				].map((option, index) => (
					<ListItem button key={option.text}>
						<ListItemIcon>
							{<option.icon></option.icon>}
						</ListItemIcon>
						<ListItemText primary={option.text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window.document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{page.title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="Server options"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Paper
				elevation={2}
				sx={{
					width: "100%",
					minHeight: "80vh",
					margin: 5,
					padding: "10px 0px",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					alignContent: "center",
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				{page.element}
			</Paper>
		</Box>
	);
};
