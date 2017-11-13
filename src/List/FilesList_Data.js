import React from "react";
import {keepalldatabase} from "../Auth/firebaseConfig";
import "../style/NewObjects.css";
import {OneFile} from "../NewObject_Module/OneFile";
import NewObjectsFiles from "../NewObject_Module/NewObjects_files";

export class FilesDataList extends React.Component {
	constructor(props) {
		super(props);
		this.history = props.history;
		this.state = {
			datalist: [],
		};
	}

	componentDidMount() {
		const db1 = keepalldatabase.ref().child("users");
		const db2 = db1.child(localStorage.getItem("USERNAME"));
		const db3 = db2.child("files");
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
							<OneFile key={dataOne} keyData={dataOne} history={this.history}/>
						);
					})
				}
				<NewObjectsFiles history={this.history}/>
			</div>
		);
	}
}

export default FilesDataList;
