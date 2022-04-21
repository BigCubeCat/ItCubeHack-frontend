import React, {useState} from 'react';
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	InputLabel, MenuItem,
	Modal,
	OutlinedInput, Select,
} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {CheckBox, Visibility, VisibilityOff} from '@mui/icons-material';
import {LoginUser, RegisterUser} from '../api/user'
import * as actions from '../store/actions'
import Typography from "@mui/material/Typography";
import {CreatePost} from "../api/post";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'white',
	'& .MuiTextField-root': {m: 1, width: '25ch'},
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

export default function CreateForm(props) {
	const [isOpen, setIsOpen] = useState(true);
	const [title, setTitle] = useState("");
	const [region, setRegion] = useState("");
	const [unesco, setUnesco] = useState(false);
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useDispatch(); // Получаем диспатч из хука
	const close = () => {
		setIsOpen(false)
		props.setIsOpen(false)
	}
	const user = useSelector(state => state).user
	return (
		<Modal
			open={isOpen}
		>
			<Box sx={style}>
				<h2 style={{textAlign: 'center'}} id="parent-modal-title">
					Вход в <img src="logo512.png" width={32}/></h2>
				<InputLabel htmlFor="login">Название</InputLabel>
				<OutlinedInput
					style={{width: '100%'}}
					id="login" label="Логин" variant="outlined"
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>
				<InputLabel htmlFor="login">Описание</InputLabel>
				<OutlinedInput
					style={{width: '100%'}}
					id="login" label="Описание" variant="outlined"
					value={description}
					onChange={event => setDescription(event.target.value)}
				/>
				<InputLabel htmlFor="login">Регион</InputLabel>
				<OutlinedInput
					style={{width: '100%'}}
					id="login" label="Регион" variant="outlined"
					value={region}
					onChange={event => setRegion(event.target.value)}
				/><InputLabel id="demo-simple-select-label">Тип</InputLabel>
				<Select
					style={{width: "100%"}}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={category}
					label="Type"
					onChange={e => setCategory(e.target.value)}
				>
					<MenuItem value={"памятник"}>Памятник</MenuItem>
					<MenuItem value={"ансамбль"}>Ансамбль</MenuItem>
					<MenuItem value={"достопримечательное место"}>Достопримечательное место
					</MenuItem>
				</Select>
				<InputLabel id="check_">В ЮНЕСКО</InputLabel>
				<Select
					style={{width: "100%"}}
					labelId="check_"
					id="demo-simple-select"
					value={unesco}
					label="unesco"
					onChange={e => setUnesco(e.target.value)}
				>
					<MenuItem value={true}>Да</MenuItem>
					<MenuItem value={false}>Нет</MenuItem>
				</Select>
				<br/>
				<Button
					style={{width: '50%'}}
					onClick={() => close()}>{'Отмена'}</Button>
				<Button
					style={{width: '50%'}}
					onClick={() => {
						CreatePost({
							user: user,
							post: {
								category: category,
								description: description,
								region: region,
								title: title,
								unesco: unesco
							}
						}, () => {
						});
						close()
					}}>Создать</Button>
			</Box>
		</Modal>
	)
		;
}