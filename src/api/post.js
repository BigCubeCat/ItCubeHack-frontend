import {API_ADDRESS} from "./user";


export function CreatePost(post, callback) {
	fetch(`${API_ADDRESS}/create/post`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(post),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}

export function GetPost(post_id, callback) {
	fetch(`${API_ADDRESS}/get/post?post_id=${post_id}`).then(result => result.json()).then(res => {
		callback(res.post);
	}).then(e => e)
}

export function FindPost(post_name, callback) {
	fetch(`${API_ADDRESS}/filter/post/name?post_name=${post_name}`).then(result => result.json()).then(res => {
		if (!res.status) {
			let posts = res.posts;
			if (posts.length === 0)  {
				callback(0)
			}
			console.log(posts[0])
			callback(posts[0]);
		}
	}).then(e => e);
}