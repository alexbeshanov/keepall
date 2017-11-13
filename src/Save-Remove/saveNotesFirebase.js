import {keepalldatabase} from "../Auth/firebaseConfig";
import {ClassGost} from "../gost";
import {key_gost} from "../Auth/userlogin";

export function saveNotesFirebase(valueNameTitle, valueTextArea) {
    var gost = new ClassGost();
    var nameTitleGost = gost.Encode(valueNameTitle, key_gost);
    var textAreaGost = gost.Encode(valueTextArea, key_gost);
    keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/notes/" + valueNameTitle).set({
        NewName: "" + nameTitleGost,
        NewText: "" + textAreaGost
    });
}

export default saveNotesFirebase();


