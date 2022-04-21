import {API_ADDRESS} from "./user";


export function CreatePost(post, callback) {
	fetch(`${API_ADDRESS}/create/`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(post),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}

export function GetPost(post_id, callback) {
	fetch(`${API_ADDRESS}/get/${post_id}`).then(result => result.json()).then(res => {
		callback(res.post);
	}).then(e => e)
}

export function FindPost(post, callback) {
	fetch(`${API_ADDRESS}/create/`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(post),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}