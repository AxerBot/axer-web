import { Paper } from "@mui/material/";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import PrefixSelectorPanel from "../../components/Dashboard/PrefixSelectorPanel";
import StoreCurrentGuildInfo from "../../helpers/StoreCurrentGuildInfo";

export default () => {
	const [guildsResponse, setGuildsResponse] = useState<any[]>([]);

	return <PrefixSelectorPanel></PrefixSelectorPanel>;
};
