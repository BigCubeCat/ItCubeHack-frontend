import * as React from 'react';
import Box from '@mui/material/Box';
import Comment from './Comment';

export default function Comments(props) {
	return (
		<Box sx={{maxWidth: 1600}}
		>
			{props.comments.map(v => <Comment user={v.user} text={v.text}/>)}
		</Box>
	)
}