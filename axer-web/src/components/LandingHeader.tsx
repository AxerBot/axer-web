import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";

export default () => {
	const mesh = keyframes`
        0% {
            background-position-y: 0;
        }
        100% {
            background-position-y: -502px;
        }`;

	return (
		<>
			<Box
				sx={{
					width: "100%",
					// backgroundColor: "primary.main",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					alignContent: "flex-start",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden",
					position: "relative",
					backgroundImage:
						"linear-gradient(90deg, #8479E1 40%, rgba(0,212,255,0) 100%)",
					"@media (max-width: 420px)": {
						minHeight: "70vh",
					},
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						position: "absolute",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "center",
						alignItems: "center",
						zIndex: -10,
						backgroundSize: 502,
						backgroundColor: "primary.main",
						backgroundImage:
							"url(./../src/static/images/triangles.svg)",
						animation: `${mesh} 10s infinite linear`,
					}}
				></Box>
				<Box
					sx={{
						display: "flex",
						width: "100%",
						height: "fit-content",
						padding: "5%",
					}}
				>
					<Typography
						variant="h1"
						sx={{
							color: "#fff",
							fontWeight: 700,
							"@media (max-width: 845px)": {
								fontSize: 80,
							},
							"@media (max-width: 420px)": {
								fontSize: 60,
								textAlign: "center",
							},
						}}
					>
						A{" "}
						<span
							style={{
								color: "#B4ECE3",
							}}
						>
							powerful
						</span>{" "}
						bot with{" "}
						<span style={{ color: "rgb(255 152 198)" }}>osu!</span>{" "}
						related{" "}
						<span
							style={{
								color: "#B4ECE3",
							}}
						>
							features
						</span>
					</Typography>
				</Box>
				<Box
					sx={{
						width: "90%",
						padding: "5% 5%",
						paddingTop: 0,
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "flex-start",
						justifyContent: "center",
						alignItems: "center",
						"@media (max-width: 420px)": {
							fontSize: 40,
							textAlign: "center",
							alignContent: "center",
						},
					}}
				>
					<Button
						color="secondary"
						href="https://discord.com/api/oauth2/authorize?client_id=937807478429745213&permissions=8&scope=bot"
						target="about:blank"
						sx={{
							padding: "5px 120px",
							background: "rgba(180, 236, 227, 0.200)",
							"&:hover": {
								outline: "1px solid",
								borderColour: "secoundary.main",
							},
							"@media (max-width: 500px)": {
								width: "100%",
							},
						}}
					>
						Add me
					</Button>
				</Box>
			</Box>
		</>
	);
};
