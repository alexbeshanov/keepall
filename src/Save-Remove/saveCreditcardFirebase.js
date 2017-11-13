import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {key_gost} from "../Auth/userlogin";

export function saveCreditCardFirebase(valueCardName, valueCardNumber, valueCardMonthEnd, valueCardYearEnd, valueCardCVS, valueCardPIN) {
	var gost = new ClassGost();
	var cardNamegost = gost.Encode(valueCardName, key_gost);
	var cardNumbergost = gost.Encode(valueCardNumber, key_gost);
	var cardMonthEndgost = gost.Encode(valueCardMonthEnd, key_gost);
	var cardYearEndgost = gost.Encode(valueCardYearEnd, key_gost);
	var cardCVSgost = gost.Encode(valueCardCVS, key_gost);
	var cardPINgost = gost.Encode(valueCardPIN, key_gost);
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/creditcard/" + valueCardNumber).set({
		CardName: "" + cardNamegost,
		CardNumber: "" + cardNumbergost,
		CardMonthEnd: "" + cardMonthEndgost,
		CardYearEnd: "" + cardYearEndgost,
		CardCVS: "" + cardCVSgost,
		CardPIN: "" + cardPINgost
	});
}

export default saveCreditCardFirebase();

