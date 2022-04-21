import {API_ADDRESS} from "./user";


export function CreateComment(comment, callback) {
	// comment: {"text": comment_text, "user": user, "post": post}
	fetch(`${API_ADDRESS}/create/comment`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			text: comment.text,
			user: comment.user.login,
			post_id: comment.post
		}),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}