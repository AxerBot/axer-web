import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#8479E1",
		},
		secondary: {
			main: "#B4ECE3",
		},
		text: {
			primary: "#fff",
		},
		background: {
			default: "#303030",
			paper: "#303030",
		},
	},
	typography: {
		fontFamily: "Quicksand",
	},
});
