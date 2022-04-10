import React, { useEffect, useState, useContext } from 'react';
import { firebase } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';

 const Followcontext = React.createContext();

const FollowProvider = ({ children }) => {
  const userRef = collection(firebase, 'users');
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [get, setget] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setUsersInfo(
        data.docs.map(function (item) {
          if (item.data().id == currentUser.uid) {
            setUserInfo({ ...item.data(), adress: item._key.path.segments[6] });
          }

          return { ...item.data(), adress: item._key.path.segments[6] };
        })
      );
    };
    setget(get + 1);
    console.log(usersInfo);
    getUsers();
  }, [currentUser]);
  return (
    <Followcontext.Provider value={{ userInfo, setUserInfo, get, setget }}>
      {children}
    </Followcontext.Provider>
  );
};
export {Followcontext,FollowProvider}