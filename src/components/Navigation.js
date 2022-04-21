import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, OutlinedInput} from "@mui/material";
import {useState} from "react";
import {ArrowCircleRight, ArrowCircleLeft} from '@mui/icons-material';


export default function Navigation(props) {
	const [content, setContent] = useState(props.current);
	return (
		<Box sx={{maxWidth: 1600, display: "flex", flexDirection:"row"}}>
			<Button variant="contained" endIcon={<ArrowCircleLeft/>}></Button>
			<OutlinedInput
				style={{width: '100%'}}
				id="login" label="Логин" variant="outlined"
				value={content}
				onChange={event => setContent(event.target.value)}
			/>
			<Button variant="contained" endIcon={<ArrowCircleRight/>}></Button>
		</Box>
	);
}