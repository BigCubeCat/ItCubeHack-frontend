import React, {useState} from 'react';
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	InputLabel,
	Modal,
	OutlinedInput,
} from '@mui/material';
import {useDispatch} from 'react-redux';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {LoginUser, RegisterUser} from '../api/user'
import * as actions from '../store/actions'

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

export default function LoginForm(props) {
	const [login, setLogin] = useState('');
	const [isOpen, setIsOpen] = useState(true);
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [okRegister, setRegister] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch(); // Получаем диспатч из хука

	return (
		<Modal
			open={isOpen}
		>
			<Box sx={style}>
				<h2 style={{textAlign: 'center'}} id="parent-modal-title">
					Вход в <img src="logo512.png" width={32}/></h2>
				<InputLabel htmlFor="login">Логин</InputLabel>
				<OutlinedInput
					style={{width: '100%'}}
					id="login" label="Логин" variant="outlined"
					value={login}
					onChange={event => setLogin(event.target.value)}
				/>
				<InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
				<OutlinedInput
					style={{width: '100%'}}
					id="outlined-adornment-password"
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={e => setPassword(e.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword(!showPassword)}
								edge="end"
							>
								{showPassword ? <VisibilityOff/> : <Visibility/>}
							</IconButton>
						</InputAdornment>
					}
					label="Password"
				/>
				{
					(!isLogin) ?
						<>
							<InputLabel htmlFor="passwordR">Повтор пароля</InputLabel>
							<OutlinedInput
								style={{width: '100%'}}
								id="passwordR" label="Повтор пароля" variant="outlined"
								type={!showPassword ? 'password' : 'text'}
								value={repeatPassword}
								onChange={event => setRepeatPassword(event.target.value)}
							/>
						</>
						: null
				}
				<Button
					style={{width: '50%'}}
					onClick={() => setIsLogin(!isLogin)}>{isLogin
					? 'Регистрация'
					: 'Войти'}</Button>
				<Button
					style={{width: '50%'}}
					onClick={() => {
						if (isLogin) {
							LoginUser(login, password, user => {
								if (user) {
									dispatch(actions.LoginUser(user));
									setIsOpen(false)
								} else {
									setErrorMessage(user.status)
								}
							})
						} else {
							if (password !== repeatPassword)
								return;
							RegisterUser(login, password, user => {
								if (user.user) {
									dispatch(actions.RegisterUser(user.user));
									setIsOpen(false)
								} else {
									setErrorMessage(user.status)
								}
							})
						}
					}}>Продолжить</Button>
			</Box>
		</Modal>
	);
}