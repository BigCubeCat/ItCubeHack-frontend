export const API_ADDRESS = 'http://localhost:5000';


export function login(user_login, password, callback) {
	fetch(`${API_ADDRESS}/login/${user_login}`).then(result => result.json()).then(res => {
		let json = JSON.parse(res.value);
		let user = json.user
		if (!user) {
			callback(null)
		}
		callback(user);
	}).then(e => e);
}

export function register(user_login, password, callback) {
	fetch(`${API_ADDRESS}/register/${user_login}`).then(result => result.json()).then(res => {
		let json = JSON.parse(res.value);
		let user = json.user
		if (!user) {
			callback(null)
		}
		callback(user);
	}).then(e => e);
}
