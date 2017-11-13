import React from "react";
import "../Save-Remove/savePasswordFirebase";
import "../Auth/userlogin";
import "../style/list.css";
import CreditCardDataList from "./CreditCardList_Data";
import {removeFirebaseCreditcard} from "../Save-Remove/removeFirebase";

export const CreditCard = (props) => (
	<div className="listbox">
		<h2>Список сохраненных кредитных карт</h2>
		<div className="listbox-size">
			<CreditCardDataList history={props.history}/>
		</div>
		<button onClick={removeFirebaseCreditcard} className="listbox_button">
			<div className=""><p>Удалить все кредитные карты</p></div>
		</button>
	</div>
);
export default CreditCard;