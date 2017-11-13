import React from "react";
import "../style/NewPassword.css";
import "../style/login.css";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {downloadFirebaseFilesOne, removeFirebaseFilesOne} from "../Save-Remove/removeFirebase";

export class NewFile extends React.Component {
    constructor(props) {
        super(props);
        this.history = props.history;
        this.state = {
            value: "",
            nameFile: this.props.location.state.nameFile,
            sizeFile: (+this.props.location.state.sizeFile) / 1024,
            lastModifiedDate: this.props.location.state.lastModifiedDate,
            fileNameTitle: "" + this.props.location.state.fileTitle,
            flagFile: this.props.location.state.flag
        };
    }

    componentDidMount() {
        if (this.state.flagFile === true) {
            const db1 = keepalldatabase.ref().child("users");
            const db2 = db1.child(localStorage.getItem("USERNAME"));
            const db3 = db2.child("files");
            const db4 = db3.child(this.state.fileNameTitle);
            const fileName = db4.child("filestorage_name");
            fileName.on("value", snap => {
                this.setState({
                    nameFile: snap.val()
                });
            });
            const fileSize = db4.child("filestorage_size");
            fileSize.on("value", snap => {
                this.setState({
                    sizeFile: (+snap.val() / 1024).toFixed(1)
                });
            });
        }

    }

    pathFile = (event) => {
        event.preventDefault();
        this.history.push("/firstpage/file/");
    };
    deleteOne = (event) => {
        event.preventDefault();
        removeFirebaseFilesOne(this.state.fileNameTitle);
        this.history.push("/firstpage/file/");
    };
    downloadOne = (event) => {
        event.preventDefault();
        downloadFirebaseFilesOne(this.state.fileNameTitle);
    };

    render() {
        return (
            <div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <div className="newpassword-size_form_style">
                            <h1>Файл успешно загружен!</h1>
                            <div className="newfile">
                                <h1>Имя файла: {this.state.nameFile} </h1>
                            </div>
                            <div className="newfile">
                                <h1>Размер файла: {this.state.sizeFile} Кбайт</h1>
                            </div>
                            <div className="newfile-link_button">
                                <button className="newfile-link_div" onClick={this.downloadOne}>
                                    <p>Скачать файл</p>
                                </button>
                                <button className="newfile-link_div" onClick={this.deleteOne}>
                                    <p>Удалить файл</p>
                                </button>
                            </div>
                            <div className="newfile-link_button">
                                <button className="newfile-link_div" onClick={this.pathFile}>
                                    <p>Назад к списку файлов..</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewFile;