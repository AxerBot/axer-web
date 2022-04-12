import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CooldownEnablePanel from "../../components/Dashboard/CooldownEnablePanel";
import CooldownManager from "../../components/Dashboard/CooldownManager";
import PrefixSelectorPanel from "../../components/Dashboard/PrefixSelectorPanel";

export default () => {
	return (
		<>
			<CooldownEnablePanel></CooldownEnablePanel>
			<CooldownManager></CooldownManager>
		</>
	);
};
