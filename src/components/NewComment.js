import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, OutlinedInput} from "@mui/material";
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import {CreateComment} from "../api/comment";
import {useSelector} from "react-redux";


export default function NewComment() {
	const user = useSelector(state => state).user
	const post_id = useSelector(state => state).current
	const [content, setContent] = useState("");
	return (
		<Box sx={{maxWidth: 1600, display: "flex", flexDirection:"row"}}>
			<OutlinedInput
				style={{width: '100%'}}
				id="login" label="Логин" variant="outlined"
				value={content}
				onChange={event => setContent(event.target.value)}
			/>
			<Button variant="contained" endIcon={<SendIcon/>} onClick={() => {
				CreateComment({user: user, text: content, post: post_id}, () => {});
				setContent("")
			}}></Button>
		</Box>
	);
}