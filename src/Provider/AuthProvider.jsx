import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  console.log(user , loading);

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
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
