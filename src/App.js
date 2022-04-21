import Header from './components/Header'
import Object from './components/Object'
import LoginForm from "./components/LoginForm";
import Comments from "./components/Comments";
import NewComment from "./components/NewComment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Navigation from "./components/Navigation";
import {useDispatch, useSelector} from "react-redux";
import * as actions from './store/actions';
import {useState} from "react";
import {GetPost} from './api/post'
import CreateForm from "./components/CreateForm";
import {Button} from "@mui/material";

function App() {
	const [post, setPost] = useState({
		category: "Супер",
		comments: [
			{
				"text": "Классное место!",
				"user": "kxrxh"
			},
			{
				"text": "Классное место! Уже 2 раз тут!",
				"user": "kxrxh"
			}
		],
		description: "ОТличное описание",
		id: 1,
		region: null,
		title: "Супер-достопримечательность",
		unesco: null
	});
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const state = useSelector(state => state);
	return (
		<div>
			<Header/>
			{
				(state.user.is_admin) ? <Button onClick={() => setIsOpen(true)}>Добавить объект</Button> : null
			}
			<LoginForm isOpen={true}/>
			<Object post={post}/>
			<Card sx={{maxWidth: 1600, maxHeight: 900, margin: '0 auto', marginTop: 10, alignContent: "center"}}>
				<CardContent>
					<Comments comments={post.comments}/>
					<NewComment/>
				</CardContent>
			</Card>
			{(state.user.is_admin && isOpen) ? <CreateForm setIsOpen={setIsOpen} /> : null}
			<Navigation style={{position: "absolute", bottom: 0, margin: "0 auto"}} callback={id => {
				dispatch(actions.ChangePage(id))
				GetPost(id, post => {
					setPost(post)
				})
			}} content={state.current}/>
		</div>
	);
}

export default App;
