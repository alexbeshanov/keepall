import React from "react";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import {OnePassword} from "../NewObject_Module/OnePassword";
import NewObjectsPassword from "../NewObject_Module/NewObjects_password";

export class PassDataList extends React.Component {
	constructor(props) {
		super(props);
		this.history = props.history;
		this.state = {
			datalist: []
		};
	}

	componentDidMount() {
		const db1 = keepalldatabase.ref().child("users");
		const db2 = db1.child(localStorage.getItem("USERNAME"));
		const db3 = db2.child("password");
		db3.on("value", snap => {
			this.setState({
				datalist: ((typeof snap.val()) === "object") ? ((snap.val() === null || snap.val() === undefined) ? ([]) : Object.keys(snap.val())) : [],
			});
		});
	}

	render() {
		return (
			<div className="list_data">
				{
					this.state.datalist.map((dataOne) => {
						return (
							<OnePassword key={dataOne} keyData={dataOne} history={this.history}/>
						);
					})
				}
				<NewObjectsPassword history={this.history}/>
			</div>
		);
	}
}

export default PassDataList;