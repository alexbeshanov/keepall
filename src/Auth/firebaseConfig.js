import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCmlSAkYk5BrB-g3JIofnOJz8hEI_NVLxs",
    authDomain: "keepall-react.firebaseapp.com",
    databaseURL: "https://keepall-react.firebaseio.com",
    projectId: "keepall-react",
    storageBucket: "keepall-react.appspot.com",
    messagingSenderId: "36155719589"
};
firebase.initializeApp(config);
export const keepalldatabase = firebase.database();
export const keepallstorage = firebase.storage();
