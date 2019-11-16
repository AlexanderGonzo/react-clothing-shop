import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8MO6G21k9ajp1RUgMIe1YAk4nNhhD218",
  authDomain: "cs3320-c870e.firebaseapp.com",
  databaseURL: "https://cs3320-c870e.firebaseio.com",
  projectId: "cs3320-c870e",
  storageBucket: "cs3320-c870e.appspot.com",
  messagingSenderId: "322156262",
  appId: "1:322156262:web:25a525d28c9368ef0fad27",
  measurementId: "G-JRXPYWKPB0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

