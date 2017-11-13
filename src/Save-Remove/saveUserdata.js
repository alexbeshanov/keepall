import {keepalldatabase} from "../Auth/firebaseConfig";

export function saveUserData(valueUsername, valueUserpass, nameTitle) {
    keepalldatabase.ref("info/" + nameTitle).set({
        Username: "" + valueUsername,
        Userpass: "" + valueUserpass
    });
}