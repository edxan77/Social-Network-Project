/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { blue, lightGreen } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext, useEffect, useState } from 'react';
import {getAllUsersById } from '../../../Service/firestore';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import CircularIndeterminate from '../../Loading/Loading';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { firebase } from '../../../libTaronTest/firebase';

export default function PostsContent() {
  const { currentUser } = useContext(AuthContext);


  const [newPosts, setNewPosts] = useState(null);

  const [users, setUser] = useState(null);

  // useEffect(() => {
  //   if (currentUser) {
  //     getAllPostsById(currentUser.uid).then((postData) => {
  //       setNewPosts(postData);
  //     });
  //   }
  // }, [currentUser, newPosts]);

  useEffect(() => {
    if (currentUser) {
        const postsRef = query(
          collection(firebase, 'posts'),
          where('uid', '==', currentUser.uid),
          orderBy('createdAt', 'desc')
        );
      
        const unsubscribe = onSnapshot(postsRef, (querySnapshot) => {
      
        const data = [];
      
        querySnapshot.forEach((doc) => {
          const post = { ...doc.data(), id: doc.id };
      
          data.push(post);
          // console.log(data)
        })
        setNewPosts(data)
      });
      return () => unsubscribe();}
    
  }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      getAllUsersById(currentUser.uid).then((userData) => {
        setUser(userData);
        console.log(userData);
      });
    }
  }, [currentUser]);

  if (newPosts === null) {
    return <CircularIndeterminate/>;
  }

  if (newPosts && newPosts.length === 0) {
    return <h1>Write your first post</h1>;
  }

  // updateProfile(auth.currentUser, {
  //   displayName: users?.map(user => user.firstName),
  //   photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(() => {
  //   // Profile updated!
  //   // ...
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // });

  console.log(newPosts)

  return (
    <>
      {
        // loading ?
        newPosts &&
          // users &&
          newPosts?.map((post) => (
            <Box
              key={post.id}
              sx={{
                display: 'flex',
                // flexDirection: 'column',
                width: '700',
                // alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 500,
                  marginTop: 6,
                  borderRadius: 8,
                  bgcolor: lightGreen['50'],
                }}
              >
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: blue[600],
                      width: 85,
                      height: 85,
                    }}
                  >
                    {'Photo'}
                  </Avatar>

                  <Typography gutterBottom variant="h5" sx={{ width: '50%' }}>
                    {users?.map((user) => `${user.firstName} ${user.lastName}`)}
                  </Typography>
                </CardActions>

                <CardMedia
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 500,
                    minHeight: 300,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.text}
                    </Typography>
                  </CardContent>
                </CardMedia>
                <CardActions>
                  <Button variant="contained" endIcon={<ShareIcon />}></Button>
                  <Button
                    variant="contained"
                    endIcon={<ReadMoreOutlinedIcon />}
                  ></Button>
                  <Button
                    variant="contained"
                    endIcon={<ThumbUpIcon />}
                  ></Button>
                </CardActions>
              </Card>
            </Box>
          ))
        // : <h1>Loading....</h1>
      }
    </>
  );
}
