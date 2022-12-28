// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD17UuZPR_U_oK14h69ZRvh2CsSfCKbbQ0",
    authDomain: "facebook-c645e.firebaseapp.com",
    databaseURL: "https://facebook-c645e.firebaseapp.com",
    projectId: "facebook-c645e",
    storageBucket: "facebook-c645e.appspot.com",
    messagingSenderId: "620598868392",
    appId: "1:620598868392:web:5d1c3c1a6e6c24d9a7059d",
    measurementId: "G-M78M7XSNYV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;