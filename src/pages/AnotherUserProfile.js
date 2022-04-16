/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { AnotherUser } from '../Folowing/AnotherUserFriendList/AnotherUser';
import AnotherUserAccountMenu from './AnotherUserProfile/AnotherUserAccountMenu';
import AnotherUserPosts from './AnotherUserProfile/AnotherUserPosts';
import { firebase } from '../lib/firebase';

function AnotherUserPage() {
  const {currentUser} = useContext(AuthContext)
const [anotherUser, setAnotherUser] = useState(null)
const param = useParams()


useEffect(() => {
  if (currentUser) {
    const usersRef = query(
      collection(firebase, 'users'),
      where('id', '==', param.id),
    );
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      const data = [];

      querySnapshot.forEach((doc) => {
        const post = {
          ...doc.data()
        };
        data.push(post);
      });
      setAnotherUser(data);
    });
    return () => unsubscribe();
  }
}, [param]);

  return (
  <Box sx={{
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
  {anotherUser?.map(user => <AnotherUserAccountMenu key={user.id} users={user}/>)}

  <Box sx={{
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
    // alignItems: 'center'
  }}>
  {anotherUser?.map(user => <AnotherUserPosts key={user.id} users={user}/>)}
  
  <AnotherUser/>
  </Box>
  
  </Box>);
}

export default AnotherUserPage;
