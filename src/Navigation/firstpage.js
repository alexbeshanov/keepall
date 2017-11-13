import React from "react";
import "../style/firstpage.css";
import Tabs from "./tabs";
import {Link} from "react-router-dom";

export const FirstPage = (props) => (
	<div className="main-page">
		<div className="main-page_footer">

			<Link to="/firstpage/noinfo"
				className="main-page_footer_logo_link"
				history={props.history}>
				<div className="main-page_footer_logo">
				</div>
			</Link>

			<div className="main-page_footer_label">
				<h1>Привет, {localStorage.getItem("USERNAME")}!</h1>
			</div>

			<Link to="/" className="main-page_footer_exit_link">
				<div className="main-page_footer_exit">
					<h1>Выйти</h1>
				</div>
			</Link>

		</div>
		<Tabs history={props.history}/>
	</div>
);
export default FirstPage;
