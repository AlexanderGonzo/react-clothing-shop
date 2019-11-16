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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
