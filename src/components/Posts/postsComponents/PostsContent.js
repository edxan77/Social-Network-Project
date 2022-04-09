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
  IconButton,
} from '@mui/material';
import { blue, lightGreen } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext, useEffect, useState } from 'react';
import { getAllUsersById } from '../../../Service/firestore';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import CircularIndeterminate from '../../Loading/Loading';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  doc,
  updateDoc,
  increment,
  deleteDoc,
} from 'firebase/firestore';
import { firebase } from '../../../lib/firebase';

export default function PostsContent() {
  const { currentUser } = useContext(AuthContext);

  const [newPosts, setNewPosts] = useState(null);

  const [users, setUser] = useState(null);

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
        });
        setNewPosts(data);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      getAllUsersById(currentUser.uid).then((userData) => {
        setUser(userData);
        // console.log(userData);
      });
    }
  }, [currentUser]);

  if (newPosts === null) {
    return <CircularIndeterminate />;
  }

  if (newPosts.length === 0) {
    return <h1>Write your first post</h1>;
  }

  console.log(newPosts);

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
                // width: 700,
                // alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 18,
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 500,
                  marginTop: 6,
                  padding: '5px 0px 5px 5px',
                  borderRadius: 8,
                  bgcolor: lightGreen['50'],
                }}
              >
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    // alignItems: 'center',
                    marginBottom: 1,
                    width: '100%',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: blue[600],
                      width: 75,
                      height: 75,
                      marginRight: 4
                    }}
                  >
                    {'Photo'}
                  </Avatar>

                  <Typography gutterBottom variant="h5">
                    {users?.map((user) => `${user.firstName} ${user.lastName}`)}
                  </Typography>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      // endIcon={<DeleteIcon />}
                      // onClick={async () => {
                      //   await deleteDoc(doc(firebase, 'posts', post.id));
                      // }}
                    >
                      Edit
                    </Button>

                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={async () => {
                        await deleteDoc(doc(firebase, 'posts', post.id));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardActions>

                <CardMedia
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 500,
                    minHeight: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.text}
                    </Typography>
                  </CardContent>
                </CardMedia>
                <CardActions 
                sx={{
                  marginTop: 3
                }}
                >
                  <Button variant="contained" endIcon={<ShareIcon />}></Button>
                  <Button
                    variant="contained"
                    // endIcon={<ReadMoreOutlinedIcon />}
                  >{post?.createdAt?.toDate().toDateString()}</Button>
                  <Button
                    onClick={async () => {
                      const postsRef = doc(firebase, 'posts', post.id);
                      await updateDoc(postsRef, {
                        likes: increment(1),
                      });
                    }}
                    variant="contained"
                    endIcon={<ThumbUpIcon />}
                  >
                    {post.likes}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))
        // : <h1>Loading....</h1>
      }
    </>
  );
}
