import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Object(props) {
	return (
		<Card sx={{maxWidth: 1600, maxHeight: 900, margin: '0 auto', marginTop: 10}}>
			<CardMedia
				component="img"
				src={props.image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.title}
				</Typography>
				<Typography variant="h6" component="div">
					Регион: {props.region}
				</Typography>
				<Typography variant="h6" component="div">
					Категория: {props.type}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
