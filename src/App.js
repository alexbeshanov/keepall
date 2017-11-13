import React from "react";
import "./App.css";
import FirstPage from "./Navigation/firstpage.js";
import SecondPage from "./Navigation/secondpage.js";
import ThirdPage from "./Navigation/thirdpage.js";
import Login from "./Auth/login.js";
import Registration from "./Auth/registration";
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";

const App = () =>(
	<Router>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route exact path="/registration" component={Registration}/>
			<Route path="/firstpage" component={FirstPage}/>
			<Route path="/secondpage" component={SecondPage}/>
			<Route path="/thirdpage" component={ThirdPage}/>
		</Switch>
	</Router>
);
export default App;
