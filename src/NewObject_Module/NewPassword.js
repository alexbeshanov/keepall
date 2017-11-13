import React from "react";
import "../style/NewPassword.css";
import "../style/login.css";
import {savePasswordFirebase} from "../Save-Remove/savePasswordFirebase";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {updatePasswordFirebase} from "../Save-Remove/updateFirebase";
import {removeFirebasePasswordOne} from "../Save-Remove/removeFirebase";
import {ClassGost} from "../gost";
import {key_gost} from "../Auth/userlogin";

export class NewPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valueNewUser: "",
            valueNewPassword: "",
            valueNewTitle: "",
            passwordId: [],
            checkButtonFlag1: true,
            checkButtonFlag2: true,
            checkButtonFlag3: true,
            prevTitle: "",
            linkData: "",
            saveTag: this.props.location.state.saveTag
        };
    };

    checkName = (event) => {
        this.setState({valueNewUser: event.target.value});
        (event.target.value.length === 0) ? this.setState({checkButtonFlag1: true}) : this.setState({checkButtonFlag1: false});
    };
    checkPass = (event) => {
        this.setState({valueNewPassword: event.target.value});
        (event.target.value.length === 0) ? this.setState({checkButtonFlag2: true}) : this.setState({checkButtonFlag2: false});
    };
    checkTitle = (event) => {
        this.setState({valueNewTitle: event.target.value});
        (event.target.value.length === 0) ? this.setState({checkButtonFlag3: true}) : this.setState({checkButtonFlag3: false});
    };
    savePassword = (event) => {
        event.preventDefault();
        if (this.state.SaveTag === true) {
            updatePasswordFirebase(
                this.state.valueNewUser,
                this.state.valueNewPassword,
                this.state.valueNewTitle,
                this.state.prevTitle
            );
        } else {
            savePasswordFirebase(
                this.state.valueNewUser,
                this.state.valueNewPassword,
                this.state.valueNewTitle
            );
        }
        this.props.history.push('/firstpage/password')
    };
    deleteOne = (event) => {
        event.preventDefault();
        if (this.state.saveTag === true) {
            removeFirebasePasswordOne(this.state.prevTitle);
        }
        this.props.history.push('/firstpage/password');
    };

    componentDidMount() {
        if (this.state.saveTag === true) {
            const db1 = keepalldatabase.ref().child("users");
            const db2 = db1.child(localStorage.getItem("USERNAME"));
            const db3 = db2.child("password");
            const db4 = db3.child(this.props.location.state.linkData);
            const newUser = db4.child("NewUser");
            var gost = new ClassGost();
            newUser.on("value", snap => {
                this.setState({
                    valueNewUser: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newPassword = db4.child("NewPassword");
            newPassword.on("value", snap => {
                this.setState({
                    valueNewPassword: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newTitle = db4.child("NewTitle");
            newTitle.on("value", snap => {
                this.setState({
                    valueNewTitle: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, ''),
                    prevTitle: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
        }
    };

    render() {
        return (<div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.savePassword}
                              className="newpassword-size_form_style">
                            <h1>Новый пароль</h1>
                            <input value={this.state.valueNewUser}
                                   name="newuserinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="Имя пользователя"
                                   onInput={this.checkName}
                                   onChange={this.checkName}/>
                            <input value={this.state.valueNewPassword}
                                   name="newpasswordinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="Новый пароль"
                                   onInput={this.checkPass}
                                   onChange={this.checkPass}/>
                            <input value={this.state.valueNewTitle}
                                   name="newtitleinput"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="Дополнительные заметки"
                                   onInput={this.checkTitle}
                                   onChange={this.checkTitle}/>
                            <button type="submit" value="Submit"
                                    disabled={(
                                        this.state.checkButtonFlag1 &&
                                        this.state.checkButtonFlag2 &&
                                        this.state.checkButtonFlag3)}
                                    className={((
                                        (!this.state.checkButtonFlag1) &&
                                        (!this.state.checkButtonFlag2) &&
                                        (!this.state.checkButtonFlag3)) ||
                                        (this.state.saveTag)) ? "form-autentification form-autentification-style form-button__modificate" : "form-autentification form-autentification-style"}>
                                <p>Сохранить</p></button>
                            <button type="submit"
                                    disabled={!(this.state.saveTag)}
                                    className={(this.state.saveTag) ? "form-autentification form-autentification-style form-button__modificate_delete" : "form-autentification form-autentification-style form-button__modificate_delete2"}
                                    onClick={this.deleteOne}>
                                <h3>Удалить</h3></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default NewPassword;