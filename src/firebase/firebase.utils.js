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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err){
            console.log('error creating user', err.message);
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;