import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app);



const AuthProvider = ({children}) => {
  const [user,setUser]=useState('');

  //signup or registration
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  //signIN//login
  const signIn=(email,password)=>{
    return  signInWithEmailAndPassword(auth,email,password);
  }

  //logout

  const logOut=()=>{
    return signOut(auth);

  }

  ///forgot password handle
  
  const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email);
  }


  useEffect(()=>{

    const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
    return ()=>{
      unSubscribe();
    }

  },[])






  const authData ={
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    resetPassword
  }
  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;