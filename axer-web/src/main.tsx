import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "./styles/theme";
import DashboardServers from "./pages/Dashboard/DashboardServers";
import DashboardServerGeneral from "./pages/Dashboard/DashboardServerGeneral";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authenticate from "./components/Global/Authenticate";
import { AlertsContextProvider } from "./providers/NotificationsContext";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Authenticate />
		<AlertsContextProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route index element={<Home />} />
						</Route>
						<Route path="/dashboard" element={<DashboardServers />}>
							<Route index element={<DashboardServers />} />
						</Route>
						<Route
							path="/dashboard/:id/general"
							element={<Dashboard />}
						>
							<Route index element={<Dashboard />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</AlertsContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
