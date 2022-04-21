import * as actions from './actionTypes';

export const RegisterUser = user => ({
	type: actions.Types.REGISTER,
	payload: {user}
});
export const LoginUser = user => {
		console.log(user)
		return ({
			type: actions.Types.LOGIN,
			payload: {user}
		})
	}
;
export const Logout = user => ({
	type: actions.Types.LOGOUT,
	payload: {user}
})

export const ChangePage = id => ({
	type: actions.Types.PAGE,
	payload: {id}
})