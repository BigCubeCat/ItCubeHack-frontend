import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, OutlinedInput} from "@mui/material";
import {ArrowCircleRight, ArrowCircleLeft} from '@mui/icons-material';


export default function Navigation(props) {
	return (
		<Box sx={{maxWidth: 1600, display: "flex", flexDirection:"row"}}>
			<Button variant="contained" endIcon={<ArrowCircleLeft/>} onClick={() => {
				props.callback(props.content - 1)
			}}></Button>
			<OutlinedInput
				id="login" label="Логин" variant="outlined"
				value={props.content}
				onChange={event => props.callback(event.target.value)}
			/>
			<Button variant="contained" endIcon={<ArrowCircleRight/>} onClick={() => {
				props.callback(props.content - 0 + 1)
			}}></Button>
		</Box>
	);
}