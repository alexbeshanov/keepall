import React from "react";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import {OneNote} from "../NewObject_Module/OneNote";
import NewObjectsNotes from "../NewObject_Module/NewObjects_notes";

export class NotesDataList extends React.Component {
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
		const db3 = db2.child("notes");
		db3.on("value", snap => {
			this.setState({
				datalist: ((typeof snap.val()) === "object") ? ((snap.val() === null || snap.val() === undefined) ? ([]) : Object.keys(snap.val())) : []
			});
		});
	}

	render() {
		return (
			<div className="list_data">
				{
					this.state.datalist.map((dataOne) => {
						return (
							<OneNote key={dataOne} keyData={dataOne}/>
						);
					})
				}
				<NewObjectsNotes history={this.history}/>
			</div>
		);
	}
}

export default NotesDataList;
