import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Chip} from "@mui/material";

export default function Object(props) {
	return (
		<Card sx={{maxWidth: 1600, maxHeight: 900, margin: '0 auto', marginTop: 10}}>
			<CardMedia
				component="img"
				src={props.image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.post.title}
				</Typography>
				<Typography variant="text" component="div">
					Регион: {props.post.region} <br/> Категория: {props.post.category} <br/>
					В ЮНЕСКО: {props.post.unesco ? <Chip label="Да" color="primary" variant="outlined"/> : "Нет"}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.post.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
