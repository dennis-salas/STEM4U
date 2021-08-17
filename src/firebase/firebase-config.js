import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBQbE5lYX6CrjeNhd0S9SOgdQNPElTDZ5o",
    authDomain: "stem4u-ea462.firebaseapp.com",
    projectId: "stem4u-ea462",
    storageBucket: "stem4u-ea462.appspot.com",
    messagingSenderId: "457742202456",
    appId: "1:457742202456:web:da6cc01bce4e1f78defc2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export {
    db,
    google,
    facebook,
    firebase
}