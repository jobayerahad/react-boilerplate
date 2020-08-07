import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
const config = {};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
firebase.firestore();

export default firebase;
