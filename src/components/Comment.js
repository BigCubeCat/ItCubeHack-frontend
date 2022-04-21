import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Comment(props) {
	return (
		<Box
			sx={{
				maxWidth: 1000,
				height: 300,
				backgroundColor: 'primary.light',
				'&:hover': {
					backgroundColor: 'primary.main',
					opacity: [0.9, 0.8, 0.7],
				},
			}}
		>
			<Typography component="div" variant="text" color="black">
				{props.user}: "{props.text}"
			</Typography>
		</Box>
	);
}