import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

export default function Authprovider({ children }) {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
      }

  const authValue = {
    name: "sagor er nodi",
    createUser
  };

  


  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
