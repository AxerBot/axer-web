import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StoreCurrentGuildInfo from "../../helpers/StoreCurrentGuildInfo";

export default ({ data }: any) => {
	return (
		<Card sx={{ maxWidth: 345, minWidth: 227, margin: 2 }}>
			<CardMedia
				component="img"
				height="140"
				image={
					data.icon
						? `https://cdn.discordapp.com/icons/${data.id}/${data.icon}?size=2048`
						: "/src/static/images/triangles.svg"
				}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					variant="contained"
					onClick={() => {
						StoreCurrentGuildInfo(data.id);
					}}
				>
					Configure
				</Button>
			</CardActions>
		</Card>
	);
};
