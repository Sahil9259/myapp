import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCdyp9xsiEgI5fcHBE7bpO_fYEMv4akm2U",
    authDomain: "myapp-signup-536c3.firebaseapp.com",
    projectId: "myapp-signup-536c3",
    storageBucket: "myapp-signup-536c3.appspot.com",
    messagingSenderId: "1065064962842",
    appId: "1:1065064962842:web:6eb70e4c8533d16ec4aaa3",
    measurementId: "G-CZGQ1R6W8E"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;