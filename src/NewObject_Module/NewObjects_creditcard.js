import React from "react";
import {Link} from "react-router-dom";
import "../style/NewObjects.css";

export const NewObjectsCreditcard = (props) => (
	<div className="newobjects">
		<Link to={{pathname: "/firstpage/creditcard/newcreditcard", state: {saveTag: false}}}>
			<button className="newobjects-link">
				<div className="newobjects_button_style newobjects_button_style_img"></div>
			</button>
		</Link>
	</div>
);
export default NewObjectsCreditcard;