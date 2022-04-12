import { alpha, InputBase } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { theme } from "./../styles/theme";
import { SyntheticEvent } from "react";

export default ({ onInput }: any) => {
	const Search = styled("div")((eae) => ({
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	}));

	const SearchIconWrapper = styled("div")((eae) => ({
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		zIndex: 10,
	}));

	const StyledInputBase = styled(InputBase)((eae) => ({
		color: "white",
		width: "100%",
		"& .MuiInputBase-input": {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create("width"),
			width: "100%",
		},
	}));

	function checkEnter(event: any) {
		if (event.key == "Enter") {
			onInput();
		}
	}

	return (
		<Search onKeyDown={checkEnter}>
			<SearchIconWrapper onClick={onInput}>
				<SearchIcon
					style={{
						color: "#ffffff",
						cursor: "pointer",
					}}
				/>
			</SearchIconWrapper>
			<StyledInputBase
				sx={{
					width: "90%",
				}}
				placeholder="Search…"
				inputProps={{ "aria-label": "search" }}
			/>
		</Search>
	);
};
