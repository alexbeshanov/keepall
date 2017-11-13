import React from "react";
import "../Save-Remove/savePasswordFirebase";
import "../style/list.css";
import {PassportDataList} from "./PassportDataList_Data";
import {removeFirebasePassportData} from "../Save-Remove/removeFirebase";

export const PassportData = (props) => (
    <div className="listbox">
        <h2>Список сохраненных паспортных данных</h2>
        <div className="listbox-size">
            <PassportDataList history={props.history}/>
        </div>
        <button onClick={removeFirebasePassportData} className="listbox_button">
            <div>
                <p>Удалить все паспортные данные</p>
            </div>
        </button>
    </div>
);
export default PassportData;