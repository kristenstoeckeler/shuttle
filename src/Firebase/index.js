import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8Y1-Qbp0rHH7_Z5qIntvs7xYc2p0UYos",
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