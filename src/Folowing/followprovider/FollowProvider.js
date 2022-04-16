/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { firebase } from '../../lib/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { getAuth } from 'firebase/auth';

 const Followcontext = React.createContext();

const FollowProvider = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userRef = collection(firebase, 'users');
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [usersInfo, setUsersInfo] = useState([]);
  const [get, setget] = useState(0);
  
  useEffect(() => {
    if(currentUser){

    const unsubscribe = onSnapshot(userRef, (querySnapshot) => {

    setUsersInfo( querySnapshot.docs.map(function(item) {
        if (item.data().id == currentUser.uid) {
         setUserInfo({ ...item.data(), adress: item._key.path.segments[6] });
  
        } 
         return { ...item.data(), adress: item._key.path.segments[6] };
  
      }));

    });
    return () => unsubscribe();
  }
  setget(get + 1);
  }, [currentUser]);


  return (
    <Followcontext.Provider value={{ userInfo, setUserInfo, get, setget, usersInfo}}>
      {children}
    </Followcontext.Provider>
  );
};
export {Followcontext,FollowProvider}