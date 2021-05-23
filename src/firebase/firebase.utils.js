import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCkEuvqCg2vijA5VXg7Zalb3HpPB_QczU",
    authDomain: "react-ecommerce-app-590f4.firebaseapp.com",
    projectId: "react-ecommerce-app-590f4",
    storageBucket: "react-ecommerce-app-590f4.appspot.com",
    messagingSenderId: "242894683889",
    appId: "1:242894683889:web:46d00244d493d427e4b350",
    measurementId: "G-CLD6XW3GH9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;