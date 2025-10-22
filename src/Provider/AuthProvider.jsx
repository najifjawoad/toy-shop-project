import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

 const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
 

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email,password) =>
  {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut = () =>
  {
    return signOut(auth);
  }
  const upadteTheUser = (updatedData)=>
  {
     return updateProfile(auth.currentUser , updatedData);
  }
  const logInGoogle = ()=>
  {
    return signInWithPopup (auth, GoogleProvider);

  }
   
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
        setUser(currentUser);
        setLoading(false);

    });
    return ()=>
    {
        unsubscribe();
    }
  },[] )

  const authData = {
    user,
    setUser,
    createUser,
    logInUser,
    logOut,
    loading,
    setLoading,
    upadteTheUser,
    logInGoogle
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
