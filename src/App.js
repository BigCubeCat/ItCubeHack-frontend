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

function App() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	return (
		<div>
			<Header/>
			<LoginForm isOpen={true}/>
			<Object/>
			<Card sx={{maxWidth: 1600, maxHeight: 900, margin: '0 auto', marginTop: 10, alignContent: "center"}}>
				<CardContent>
					<Comments/>
					<NewComment/>
				</CardContent>
			</Card>
			<Navigation style={{position: "absolute", bottom: 0, margin: "0 auto"}} callback={id => {
				dispatch(actions.ChangePage(id))
			}} content={state.current} />
		</div>
	);
}

export default App;
