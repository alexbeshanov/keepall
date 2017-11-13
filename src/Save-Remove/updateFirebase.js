import {keepalldatabase} from "../Auth/firebaseConfig";
import {savePasswordFirebase} from "./savePasswordFirebase";
import {saveNotesFirebase} from "./saveNotesFirebase";
import {saveCreditCardFirebase} from "./saveCreditcardFirebase";
import {savePassportDataFirebase} from "./savePassportdataFirebase";

export function updatePasswordFirebase(valueNewUser,
	valueNewPassword,
	valueNewTitle,
	prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/password/" + prevTitle).remove();
	savePasswordFirebase(
		valueNewUser,
		valueNewPassword,
		valueNewTitle);
}

export function updateNotesFirebase(valueNameTitle, valueTextArea, prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/notes/" + prevTitle).remove();
	saveNotesFirebase(valueNameTitle, valueTextArea);
}

export function updateCreditCardFirebase(valueCardName,
	valueCardNumber,
	valueCardMonthEnd,
	valueCardYearEnd,
	valueCardCVS,
	valueCardPIN,
	prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/creditcard/" + prevTitle).remove();
	saveCreditCardFirebase(
		valueCardName,
		valueCardNumber,
		valueCardMonthEnd,
		valueCardYearEnd,
		valueCardCVS,
		valueCardPIN);
}

export function updatePassportDataFirebase(valuePassportSurname,
	valuePassportName,
	valuePassportThirdName,
	valuePassportNumber,
	valuePassportSex,
	valuePassportDateofBirth,
	valuePassportPlaceofBirth,
	valuePassportPlaceInput,
	valuePassportDateInput,
	valuePassportIDInput,
	valuePassportRegistration,
	prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/passportData/" + prevTitle).remove();
	savePassportDataFirebase(
		valuePassportSurname,
		valuePassportName,
		valuePassportThirdName,
		valuePassportNumber,
		valuePassportSex,
		valuePassportDateofBirth,
		valuePassportPlaceofBirth,
		valuePassportPlaceInput,
		valuePassportDateInput,
		valuePassportIDInput,
		valuePassportRegistration);
}