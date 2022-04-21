import {API_ADDRESS} from "./user";


export function CreateComment(comment, callback) {
	// comment: {"text": comment_text, "user": user, "post": post}
	fetch(`${API_ADDRESS}/add_comment/`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			text: comment.comment_text,
			user: comment.user.id,
			post: comment.post
		}),
	}).then(result => result.json()).then(res => {
		callback(res);
	}).then(e => e);
}