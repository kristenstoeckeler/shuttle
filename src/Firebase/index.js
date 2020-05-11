import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "shuttle-a3107.firebaseapp.com",
    databaseURL: "https://shuttle-a3107.firebaseio.com",
    projectId: "shuttle-a3107",
    storageBucket: "shuttle-a3107.appspot.com",
    messagingSenderId: "470868562116",
    appId: "1:470868562116:web:b1fe0ab28847526a40f991"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export{
    storage, firebase as default
}