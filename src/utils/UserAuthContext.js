import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // function signUp(email, password) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }
  const signUp = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await sendEmailVerification(auth.currentUser).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );
    } catch (err) {
      console.log(err);
    }
  };
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth , number, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        setUpRecaptcha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}