import React from "react";
import "../Save-Remove/savePasswordFirebase";
import "../Auth/userlogin";
import "../style/list.css";
import PassDataList from "./PasswordList_Data";
import {removeFirebasePassword} from "../Save-Remove/removeFirebase";

export const Password = (props) => (
    <div className="listbox">
        <h2>Список сохраненных паролей</h2>
        <div className="listbox-size">
            <PassDataList history={props.history}/>
        </div>
        <button onClick={removeFirebasePassword} className="listbox_button">
            <div>
                <p>Удалить все пароли</p>
            </div>
        </button>
    </div>
);
export default Password;
