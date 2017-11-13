import React from "react";
import "../style/login.css";
import "../App.css";
import "./userlogin";
import {Link} from "react-router-dom";
import RIPEMD160 from "ripemd160";
import {keepalldatabase} from "./firebaseConfig";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            disabled2: true,
            auth: true,
            userName: "",
            userPass: ""
        };
        localStorage.clear();
    };

    authChangeName = (event) => {
        this.setState(
            {
                userName: event.target.value
            }
        );
        (event.target.value.length === 0) ? this.setState({disabled: true}) : this.setState({disabled: false, auth:true});
    };

    authChangePass = (event) => {
        this.setState(
            {
                userPass: event.target.value
            }
        );
        (event.target.value.length === 0) ? this.setState({disabled2: true}) : this.setState({disabled2: false, auth:true});
    };

    authFirebase = (event) => {
        if ((!this.state.disabled) && (!this.state.disabled2)) {
            var ripeMD = new RIPEMD160();
            ripeMD.end(this.state.userPass);
            var ripeMDend = ripeMD.read().toString("hex");
            var db = keepalldatabase.ref("info/" + this.state.userName + "/");
            var db2 = db.child("Userpass");
            db2.on("value", snap => {
                if (ripeMDend === snap.val()) {
                    localStorage.setItem("USERNAME", this.state.userName);
                    localStorage.setItem("USERPASS", ripeMDend);
                    this.props.history.push('/firstpage/noinfo');
                }
                else {
                    this.setState({
                        auth: false
                    });
                    this.props.history.push('/');
                }
            });
            event.preventDefault();
        }
    };

    render() {
        return (
            <div className="autentification">
                <div className="autentification autentification-form">
                    <div className="autentification-size">
                        <div className="autentification-sizeblock">
                            <h1>KEEPALL</h1>
                            <p>Вход</p>
                        </div>
                        <div className="autentification-sizeblock">
                            <form name="login" className="form-autentification">
                                <input type="text"
                                       autoComplete="off"
                                       id="name"
                                       className="form-autentification__input form-autentification form-autentification-style form-input"
                                       name="username"
                                       placeholder="Имя пользователя"
                                       defaultValue={""}
                                       onInput={this.authChangeName}/>
                                <input type="password"
                                       id="password"
                                       autoComplete="off"
                                       name="password"
                                       placeholder="Пароль"
                                       className="form-autentification__input form-autentification form-autentification-style form-input"
                                       defaultValue={""}
                                       onInput={this.authChangePass}/>
                                <button type="submit"
                                        name="button"
                                        disabled={this.state.disabled2 + this.state.disabled}
                                        className={(( !this.state.disabled ) && ( !this.state.disabled2 )) ?
                                            "form-autentification form-autentification-style form-button__modificate" : "form-autentification form-autentification-style form-button"}
                                        onClick={this.authFirebase}><p>Войти</p></button>
                            </form>
                            <h3 className={(this.state.auth)? "auth-yes":"auth-yes auth-no"}>Неправильный логин или пароль!</h3>
                            <Link to="/registration"><p>Зарегистрироваться</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;