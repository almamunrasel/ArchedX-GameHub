import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);



const AuthProvider = ({children}) => {
  const [user,setUser]=useState('');
  const [loading,setLoading]= useState(true);

  //signup or registration
  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  //signIN//login
  const signIn=(email,password)=>{
    setLoading(true);
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

  //update user

  const updateUser=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData);
  }


  useEffect(()=>{

    const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
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
    resetPassword,
    updateUser,
    loading,
    setLoading
  }
  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;