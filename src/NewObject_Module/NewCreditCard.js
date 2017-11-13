import React from "react";
import "../style/NewPassword.css";
import "../style/login.css";
import {saveCreditCardFirebase} from "../Save-Remove/saveCreditcardFirebase";
import {updateCreditCardFirebase} from "../Save-Remove/updateFirebase"
import {keepalldatabase} from "../Auth/firebaseConfig";
import {removeFirebaseCreditcardOne} from "../Save-Remove/removeFirebase";
import {key_gost} from "../Auth/userlogin";
import {ClassGost} from "../gost";
import {Option} from "./NewCreditCard";

export class NewCreditCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            cardData: {
                valueCardNumber: "",
                valueCardName: "",
                valueCardMonthEnd: "",
                valueCardYearEnd: "",
                valueCardCVS: "",
                valueCardPIN: ""
            },
            checkButtonFlag1: true,
            checkButtonFlag2: true,
            checkButtonFlag3: true,
            checkButtonFlag4: true,
            checkButtonFlag5: true,
            checkButtonFlag6: true,
            prevTitle: "",
            linkData: "",
            saveTag: this.props.location.state.saveTag
        };
    };

    checkCardNumber = (event) => {
        this.setState({
            valueCardNumber: event.target.value
        });
        (!event.target.value.length === 16) ? this.setState({checkButtonFlag1: true}) : this.setState({checkButtonFlag1: false});
    };
    checkCardName = (event) => {
        this.setState({
            valueCardName: event.target.value
        });
        (event.target.value.length === 0) ? this.setState({checkButtonFlag2: true}) : this.setState({checkButtonFlag2: false});
    };
    checkCardMonthEnd = (event) => {
        this.setState({
            valueCardMonthEnd: event.target.value
        });
        (event.target.value.length === 0) ? this.setState({checkButtonFlag3: true}) : this.setState({checkButtonFlag3: false});
    };
    checkCardYearEnd = (event) => {
        this.setState({
            valueCardYearEnd: event.target.value
        });
        (event.target.value.length === 0) ? this.setState({checkButtonFlag4: true}) : this.setState({checkButtonFlag4: false});
    };
    checkCardCVS = (event) => {
        this.setState({
            valueCardCVS: event.target.value
        });
        (event.target.value.length === 0) ? this.setState({checkButtonFlag5: true}) : this.setState({checkButtonFlag5: false});
    };
    checkCardPIN = (event) => {
        this.setState({
            valueCardPIN: event.target.value,
        });
        (event.target.value.length === 0) ? this.setState({checkButtonFlag6: true}) : this.setState({checkButtonFlag6: false});
    };
    saveCreditCard = (event) => {
        event.preventDefault();
        if (this.state.saveTag === true) {
            updateCreditCardFirebase(
                this.state.valueCardName,
                this.state.valueCardNumber,
                this.state.valueCardMonthEnd,
                this.state.valueCardYearEnd,
                this.state.valueCardCVS,
                this.state.valueCardPIN,
                this.state.prevTitle);
        }
        else {
            saveCreditCardFirebase(
                this.state.valueCardName,
                this.state.valueCardNumber,
                this.state.valueCardMonthEnd,
                this.state.valueCardYearEnd,
                this.state.valueCardCVS,
                this.state.valueCardPIN);
        }
        this.props.history.push('/firstpage/creditcard/');
    };
    deleteOne = (event) => {
        event.preventDefault();
        if (this.state.saveTag === true) {
            removeFirebaseCreditcardOne(this.state.prevTitle);
        }
        this.props.history.push('/firstpage/creditcard/');
    };

    Year = (event) => {
        var i;
        var arr = [];
        for (i = 2012; i <= 2051; i++)
            arr.push(<option value={i}>{i.toString()}</option>)
        return arr;
    };
    Month = (event) => {
        var i;
        var arr = [];
        for (i = 1; i <= 12; i++)
            arr.push(<option value={i}>{i.toString()}</option>)
        return arr;
    };

    componentDidMount() {
        if (this.state.saveTag === true) {
            const db1 = keepalldatabase.ref().child("users");
            const db2 = db1.child(localStorage.getItem("USERNAME"));
            const db3 = db2.child("creditcard");
            const db4 = db3.child(this.props.location.state.linkData);
            const newName = db4.child("CardName");
            var gost = new ClassGost();
            newName.on("value", snap => {
                this.setState({
                    valueCardName: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newNumber = db4.child("CardNumber");
            newNumber.on("value", snap => {
                this.setState({
                    valueCardNumber: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, ''),
                    prevTitle: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newPIN = db4.child("CardPIN");
            newPIN.on("value", snap => {
                this.setState({
                    valueCardPIN: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newMonthEnd = db4.child("CardMonthEnd");
            newMonthEnd.on("value", snap => {
                this.setState({
                    valueCardMonthEnd: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newYearEnd = db4.child("CardYearEnd");
            newYearEnd.on("value", snap => {
                this.setState({
                    valueCardYearEnd: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
            const newCVS = db4.child("CardCVS");
            newCVS.on("value", snap => {
                this.setState({
                    valueCardCVS: gost.Decode(snap.val(), key_gost).replace(/[^\w\dА-Яа-яЁё\s]/g, '')
                })
            });
        }
    };

    render() {
        return (
            <div className="newpassword">
                <div className="newpassword-size">
                    <div className="newpassword-size_form">
                        <form onSubmit={this.saveCreditCard}
                              className="newpassword-size_form_style">
                            <h1>Новая кредитная карта</h1>
                            <input value={this.state.valueCardNumber}
                                   name="cardnumber"
                                   autoComplete="off"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   placeholder="Номер карты"
                                   onInput={this.checkCardNumber}
                                   onChange={this.checkCardNumber}/>
                            <div className="newpassword-size_form_style_select">
                                <select value={this.state.valueCardMonthEnd} name="cardmonthend"
                                        onInput={this.checkCardMonthEnd} onChange={this.checkCardMonthEnd}>
                                    <option value={this.checkCardMonthEnd}>{this.checkCardMonthEnd}</option>
                                    {this.Month()}
                                </select>
                                <select value={this.state.valueCardYearEnd}
                                        name="cardyearend"
                                        onInput={this.checkCardYearEnd}
                                        onChange={this.checkCardYearEnd}>
                                    <option value={this.checkCardYearEnd}>{this.checkCardYearEnd}</option>
                                    {this.Year()}
                                </select>
                            </div>
                            <input value={this.state.valueCardName} name="cardname"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="Имя владельца карты" onInput={this.checkCardName}
                                   onChange={this.checkCardName}/>
                            <input value={this.state.valueCardCVS} name="cardCVS"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="Код CVS" onInput={this.checkCardCVS}
                                   onChange={this.checkCardCVS}/>
                            <input value={this.state.valueCardPIN} name="cardPIN"
                                   className="form-autentification__input form-autentification-style"
                                   type="text"
                                   autoComplete="off"
                                   placeholder="PIN код" onInput={this.checkCardPIN}
                                   onChange={this.checkCardPIN}/>
                            <button type="submit" value="Submit"
                                    disabled={(this.state.checkButtonFlag1 && this.state.checkButtonFlag2 && this.state.checkButtonFlag3 && this.state.checkButtonFlag4 && this.state.checkButtonFlag5 && this.state.checkButtonFlag6)}
                                    className={(this.state.saveTag) || ((!this.state.checkButtonFlag1) && (!this.state.checkButtonFlag2) && (!this.state.checkButtonFlag3) && (!this.state.checkButtonFlag4) && (!this.state.checkButtonFlag5) && (!this.state.checkButtonFlag6)) ? "form-autentification form-autentification-style form-button__modificate" : "form-autentification form-autentification-style"}>
                                <p>Сохранить</p>
                            </button>
                            <button type="submit"
                                    disabled={!(this.state.saveTag)}
                                    className={(this.state.saveTag) ? "form-autentification form-autentification-style form-button__modificate_delete" : "form-autentification form-autentification-style form-button__modificate_delete2"}
                                    onClick={this.deleteOne}><h3>Удалить</h3>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCreditCard;

