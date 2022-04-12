import React, { useState } from "react";

export const AlertsContext = React.createContext<any>([]);

export function AlertsContextProvider({
	children,
}: React.PropsWithChildren<unknown>) {
	const [alerts, setAlerts] = useState([]);

	return (
		<AlertsContext.Provider value={{ alerts, setAlerts }}>
			{children}
		</AlertsContext.Provider>
	);
}
