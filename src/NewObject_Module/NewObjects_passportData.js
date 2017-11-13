import React from "react";
import {Link} from "react-router-dom";
import "../style/NewObjects.css";

export const NewObjectsPassportData = (props) => (
	<div className="newobjects">
		<Link to={{pathname: "/firstpage/passportdata/newpassportdata", state: {saveTag: false}}}>
			<button className="newobjects-link">
				<div className="newobjects_button_style newobjects_button_style_img"></div>
			</button>
		</Link>
	</div>
);
export default NewObjectsPassportData;