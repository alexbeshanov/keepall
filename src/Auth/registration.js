import React from "react";
import "../style/login.css";
import "../App.css";
import "./userlogin.js";
import {Link} from "react-router-dom";
import RIPEMD160 from "ripemd160";
import {saveUserData} from "../Save-Remove/saveUserdata";

export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            disabled2: true,
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
        (event.target.value.length === 0) ? this.setState({disabled: true}) : this.setState({disabled: false});
    };

    authChangePass = (event) => {
        this.setState(
            {
                userPass: event.target.value
            }
        );
        (event.target.value.length === 0) ? this.setState({disabled2: true}) : this.setState({disabled2: false});
    };

    authSubmit = (event) => {
        if (( !this.state.disabled ) && ( !this.state.disabled2 )) {
            var namecheck = new RIPEMD160();
            var passcheck = new RIPEMD160();
            namecheck.end(this.state.userName);
            passcheck.end(this.state.userPass);
            saveUserData(namecheck.read().toString("hex"), passcheck.read().toString("hex"), this.state.userName);
            localStorage.setItem("USERNAME", this.state.userName);
            localStorage.setItem("USERPASS", this.state.userPass);
            this.props.history.push('/firstpage/noinfo')
        }
        else this.props.history.push('/');
    };

    render() {
        return (
            <div className="autentification">
                <div className="autentification autentification-form">
                    <div className="autentification-size">
                        <div className="autentification-sizeblock">
                            <h1>KEEPALL</h1>
                            <p>Регистрация нового пользователя</p>
                        </div>
                        <div className="autentification-sizeblock">
                            <form name="login" className="form-autentification">
                                <input type="text"
                                       autoComplete="off"
                                       id="name"
                                       className="form-autentification__input form-autentification form-autentification-style form-input"
                                       name="username"
                                       placeholder="Введите имя нового пользователя"
                                       defaultValue={""}
                                       onInput={this.authChangeName}/>
                                <input
                                    className="form-autentification__input form-autentification form-autentification-style form-input"
                                    type="password"
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    placeholder="Введите пароль для нового пользователя"
                                    defaultValue={""}
                                    onInput={this.authChangePass}/>
                                <button type="submit"
                                        name="button"
                                        disabled={this.state.disabled2 + this.state.disabled}
                                        className="form-autentification form-autentification-style form-button__modificate"
                                        onClick={this.authSubmit}><p>Зарегистрироваться</p></button>
                            </form>
                            <Link to="/"><p>Войти</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Registration;