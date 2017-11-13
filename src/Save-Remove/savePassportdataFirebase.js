import {key_gost} from "../Auth/userlogin";
import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";

export function savePassportDataFirebase(valuePassportSurname, valuePassportName, valuePassportThirdName, valuePassportNumber, valuePassportSex, valuePassportDateofBirth, valuePassportPlaceofBirth, valuePassportPlaceInput, valuePassportDateInput, valuePassportIDInput, valuePassportRegistration) {
    var gost = new ClassGost();
    var nameGost = gost.Encode(valuePassportName, key_gost);
    var surnameGost = gost.Encode(valuePassportSurname, key_gost);
    var thirdnameGost = gost.Encode(valuePassportThirdName, key_gost);
    var numberGost = gost.Encode(valuePassportNumber, key_gost);
    var sexGost = gost.Encode(valuePassportSex, key_gost);
    var dataBirthGost = gost.Encode(valuePassportDateofBirth, key_gost);
    var placeBirthGost = gost.Encode(valuePassportPlaceofBirth, key_gost);
    var dateInputGost = gost.Encode(valuePassportDateInput, key_gost);
    var placeInputGost = gost.Encode(valuePassportPlaceInput, key_gost);
    var idInputGost = gost.Encode(valuePassportIDInput, key_gost);
    var placeRegistrationGost = gost.Encode(valuePassportRegistration, key_gost);

    keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/passportData/" + valuePassportSurname).set({
        Name: "" + nameGost,
        Surname: "" + surnameGost,
        ThirdName: "" + thirdnameGost,
        Number: "" + numberGost,
        Sex: "" + sexGost,
        DateofBirth: "" + dataBirthGost,
        PlaceofBirth: "" + placeBirthGost,
        PlaceInput: "" + placeInputGost,
        DateInput: "" + dateInputGost,
        IDInput: "" + idInputGost,
        PlaceRegistration: "" + placeRegistrationGost
    });
}

export default savePassportDataFirebase();


