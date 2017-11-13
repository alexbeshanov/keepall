import {keepalldatabase} from "../Auth/firebaseConfig";

export function saveFilesFirebase(valueFileTitle, valueFileName, valueFileSize) {
	keepalldatabase.ref("users/" + localStorage.getItem("USERNAME") + "/files/" + valueFileTitle).set({
		filestorage_name: "" + valueFileName,
        filestorage_size: "" + valueFileSize
	}
	);
}

export default saveFilesFirebase();


