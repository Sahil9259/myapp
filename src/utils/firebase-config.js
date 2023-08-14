import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdyp9xsiEgI5fcHBE7bpO_fYEMv4akm2U",
  authDomain: "myapp-signup-536c3.firebaseapp.com",
  projectId: "myapp-signup-536c3",
  storageBucket: "myapp-signup-536c3.appspot.com",
  messagingSenderId: "1065064962842",
  appId: "1:1065064962842:web:6eb70e4c8533d16ec4aaa3",
  measurementId: "G-CZGQ1R6W8E"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);