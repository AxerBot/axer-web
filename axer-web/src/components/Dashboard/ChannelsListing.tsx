import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import GetCooldownConfiguration from "./../../helpers/GetCooldownConfiguration";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default () => {
	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	const [guildChannels, setGuildChannels] = React.useState<any>([]);

	let cooldownConfig = GetCooldownConfiguration();

	React.useEffect(() => {
		fetch(
			`/api/guild/${
				JSON.parse(sessionStorage["current_guild"]).guild.id
			}/channels`
		)
			.then((r) => {
				return r.json();
			})
			.then((d) => {
				setGuildChannels(d);
			});
	}, []);

	console.log(cooldownConfig);

	function cooldownDataHeader(): any {
		return <>seae</>;
	}

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>Miscellaneous</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{cooldownConfig["misc"].channels.length < 1
						? cooldownDataHeader()
						: "Nothing here, try to add a channel!"}
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					aria-controls="panel2d-content"
					id="panel2d-header"
				>
					<Typography>Osu!</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					aria-controls="panel3d-content"
					id="panel3d-header"
				>
					<Typography>Fun</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					aria-controls="panel4d-content"
					id="panel4d-header"
				>
					<Typography>Contests</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}
			>
				<AccordionSummary
					aria-controls="panel5d-content"
					id="panel5d-header"
				>
					<Typography>Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
