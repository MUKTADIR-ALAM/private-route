import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

export default function Authprovider({ children }) {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
      }
    
    const logInUser = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
    }

    const signoutUser = () =>{
      return signOut(auth);
    }

      useState(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
          if(currentUser){
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
          }else{
            console.log('no user found');
            setUser(null);
          }
        })

        return ()=> unSubscribe();
      },[])

  const authValue = {
    createUser,
    user,
    loading,
    logInUser,
    signoutUser
  };

  


  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
