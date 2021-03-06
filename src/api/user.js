export const API_ADDRESS = 'http://KXRXH.pythonanywhere.com';


export function LoginUser(user_login, password, callback) {
	fetch(`${API_ADDRESS}/login`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			login: user_login,
			password: password
		}),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}

export function RegisterUser(user_login, password, callback) {
	fetch(`${API_ADDRESS}/create/user`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			login: user_login,
			password: password,
			is_admin: false
		}),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}
