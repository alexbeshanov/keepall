import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {key_gost} from "../Auth/userlogin";

export function savePasswordFirebase(valueNewUser, valueNewPassword, valueNewTitle) {
    var gost = new ClassGost();
    var userGost = gost.Encode(valueNewUser, key_gost);
    var passwordGost = gost.Encode(valueNewPassword, key_gost);
    var titleGost = gost.Encode(valueNewTitle, key_gost);
    keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/password/" + valueNewTitle).set({
        NewUser: "" + userGost,
        NewPassword: "" + passwordGost,
        NewTitle: "" + titleGost
    });
}

export default savePasswordFirebase();


