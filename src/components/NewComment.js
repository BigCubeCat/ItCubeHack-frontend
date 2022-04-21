import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, OutlinedInput} from "@mui/material";
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';


export default function NewComment() {
	const [content, setContent] = useState("");
	return (
		<Box sx={{maxWidth: 1600, display: "flex", flexDirection:"row"}}>
			<OutlinedInput
				style={{width: '100%'}}
				id="login" label="Логин" variant="outlined"
				value={content}
				onChange={event => setContent(event.target.value)}
			/>
			<Button variant="contained" endIcon={<SendIcon/>}></Button>
		</Box>
	);
}