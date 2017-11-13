import {keepalldatabase, keepallstorage} from "../Auth/firebaseConfig";

export function removeFirebaseCreditcard() {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/creditcard/").remove();
}

export function removeFirebaseCreditcardOne(prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/creditcard/" + prevTitle).remove();
}

export function removeFirebaseNotes() {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/notes/").remove();
}

export function removeFirebaseNotesOne(prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/notes/" + prevTitle).remove();
}

export function removeFirebasePassportData() {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/passportData/").remove();
}

export function removeFirebasePassportDataOne(prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/passportData/" + prevTitle).remove();
}

export function removeFirebasePassword() {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/password/").remove();
}

export function removeFirebasePasswordOne(prevTitle) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/password/" + prevTitle).remove();
}

export function removeFirebaseFiles() {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/files/").remove();
	var storageRef = keepallstorage.ref("users/" + localStorage.getItem("USERNAME") + "/");
	var childStorageRef = storageRef.child("files");
	childStorageRef.delete();
}

export function removeFirebaseFilesOne(prevTitle) {
	const db1 = keepalldatabase.ref().child("users");
	const db2 = db1.child(localStorage.getItem("USERNAME"));
	const db3 = db2.child("files");
	const db4 = db3.child(prevTitle);
	const db5 = db4.child("filestorage_name");
	db5.on("value", snap => {
		var filename = snap.val();
		var storageRef = keepallstorage.ref("users/" + localStorage.getItem("USERNAME") + "/");
		var childStorageRef = storageRef.child("files/" + filename);
		childStorageRef.delete();
	});
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/files/" + prevTitle).remove();
}

export function downloadFirebaseFilesOne(prevTitle) {
	const db1 = keepalldatabase.ref().child("users");
	const db2 = db1.child(localStorage.getItem("USERNAME"));
	const db3 = db2.child("files");
	const db4 = db3.child(prevTitle);
	const db5 = db4.child("filestorage_name");
	db5.on("value", snap => {
		var filename = snap.val();
		keepallstorage.ref("users/" + localStorage.getItem("USERNAME") + "/files/");
		var ref = "https://firebasestorage.googleapis.com/v0/b/keepall-react.appspot.com/o/users%2F"+localStorage.getItem("USERNAME")+"%2Ffiles%2F"+filename+"?alt=media&token=";
		document.location.href=ref;
	});
}