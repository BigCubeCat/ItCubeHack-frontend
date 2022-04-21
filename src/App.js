import Header from './components/Header'
import Object from './components/Object'
import LoginForm from "./components/LoginForm";
import Comments from "./components/Comments";
import NewComment from "./components/NewComment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
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
		</div>
	);
}

export default App;
