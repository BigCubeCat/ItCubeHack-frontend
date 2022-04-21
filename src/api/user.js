export const API_ADDRESS = 'http://localhost:5000';


export function LoginUser(user_login, password, callback) {
	fetch(`${API_ADDRESS}/login/`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			login: user_login,
			password: password
		}),
	}).then(result => result.json()).then(res => {
		let json = JSON.parse(res.value);
		callback(json);
	}).then(e => e);
}

export function RegisterUser(user_login, password, callback) {
	fetch(`${API_ADDRESS}/register/`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			login: user_login,
			password: password
		}),
	}).then(result => result.json()).then(res => {
		let json = JSON.parse(res.value);
		callback(json);
	}).then(e => e);
}
