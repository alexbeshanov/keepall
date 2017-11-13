import React from "react";
import "../Save-Remove/savePasswordFirebase";
import "../Auth/userlogin";
import "../style/list.css";
import FilesDataList from "../List/FilesList_Data";

export const Files = (props) => (
	<div className="listbox">
		<h2>Список сохраненных файлов</h2>
		<div className="listbox-size">
			<FilesDataList history={props.history}/>
		</div>
	</div>
);
export default Files;