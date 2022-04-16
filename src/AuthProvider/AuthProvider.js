/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
   const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false)
    });

    return unsub;
    // console.log(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
