import React from "react";
import "../style/NewObjects.css";
import {keepallstorage} from "../Auth/firebaseConfig";
import "../style/file.css";
import {saveFilesFirebase} from "../Save-Remove/saveFilesFirebase";

export class NewObjectsFiles extends React.Component {
    constructor(props) {
        super(props);
        this.history = props.history;
        this.state = {
            prevTitle: "",
            linkData: ""
        };
    }


    checkFileArea = (event) => {
        event.preventDefault();
        var file = event.target.files[0];
        var fileName = file.name.toString().replace(/[^\w\dА-Яа-яЁё\s]/g, '');
        keepallstorage.ref("users/" + localStorage.getItem("USERNAME") + "/files/" + file.name).put(file);
        saveFilesFirebase(fileName, file.name, file.size);
        this.props.history.push({pathname:'/firstpage/file/newfile',
            state:{
                nameFile: file.name,
                sizeFile: file.size,
                lastModifiedDate: file.lastModifiedDate,
                flag: false
            }});
    };

    render() {
        return (
            <div className="newobjects">
                <label className="newobjects-link">
                    <input type="file"
                           className="input"
                           onChange={this.checkFileArea}/>
                    <div className="newobjects_button_style newobjects_button_style_img"></div>
                </label>
            </div>
        )
    }
}

export default NewObjectsFiles;