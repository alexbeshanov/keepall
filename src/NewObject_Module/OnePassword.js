import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../style/NewObjects.css";

export class OnePassword extends Component {

	constructor(props) {
		super(props);
		this.keyData = props.keyData;
		this.history = props.history;
	}

	render() {
		return (
			<div className="newobjects">
				<Link to={{
					pathname: "/firstpage/password/newpassword",
					state: {linkData: this.keyData, saveTag: true}
				}}>
					<button className="newobjects-link">
						<div className="newobjects_button_style">
							<h1>{this.keyData}</h1>
						</div>
					</button>
				</Link>
			</div>
		);
	}
}

export default OnePassword;