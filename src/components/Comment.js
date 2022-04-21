import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Comment(props) {
	return (
		<Box
			sx={{
				maxWidth: 1000,
			}}
		>
			<Typography component="div" variant="text" color="black">
				{props.user}: "{props.text}"
			</Typography>
		</Box>
	);
}