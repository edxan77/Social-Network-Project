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
  TextField,
} from '@mui/material';
import { blue, lightGreen } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext, useEffect, useState } from 'react';
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
import { handleEdit } from './utils';
import './addNewPostForm.css';

export default function PostsContent() {
  const { currentUser } = useContext(AuthContext);
  const [newPosts, setNewPosts] = useState(null);
  const [newText, setNewText] = useState('');

  const handleChange = (e) => {
    e.stopPropagation();
    setNewText(e.target.value);
  };

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
          const post = {
            ...doc.data(),
            id: doc.id,
            profilName: currentUser?.displayName,
            photo: currentUser?.photoURL,
          };
          data.push(post);
        });
        setNewPosts(data);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  // useEffect(() => {
  //   if (currentUser) {
  //     getAllUsersById(currentUser.uid).then((userData) => {
  //       setUser(userData);
  //     });
  //   }
  // }, [currentUser]);

  if (newPosts === null) {
    return <CircularIndeterminate />;
  }

  if (newPosts.length === 0) {
    return <h1>Write your first post</h1>;
  }

  // console.log(users)

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
                    marginBottom: 1,
                    width: '100%',
                  }}
                >
                  <Avatar
                    src={post.photo}
                    sx={{
                      bgcolor: blue[600],
                      width: 75,
                      height: 75,
                      marginRight: 4,
                    }}
                  >
                    {'Photo'}
                  </Avatar>

                  <Typography gutterBottom variant="h5">
                    {/* {users?.map((user) => `${user.firstName} ${user.lastName}`)} */}
                    {/* {auth.currentUser?.displayName} */}
                    {/* {users} — */}
                    {post.profilName}
                  </Typography>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => handleEdit(post.id, post.text)}
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
                    {post.isEdit ? (
                      <form
                        id="edit-input-form"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const postsRef = doc(firebase, 'posts', post.id);
                          if (!newText.trim()) {
                            await updateDoc(postsRef, {
                              isEdit: false,
                            });
                          } else {
                            await updateDoc(postsRef, {
                              isEdit: false,
                              text: newText,
                            });
                          }
                          setNewText('');
                        }}
                      >
                        <TextField
                          fullWidth
                          multiline
                          rows={7}
                          onChange={handleChange}
                          defaultValue={post.text}
                        ></TextField>

                        <Button type="submit" variant="contained">
                          Edit
                        </Button>
                      </form>
                    ) : (
                      <Typography gutterBottom variant="h6" component="div">
                        {post.text}
                      </Typography>
                    )}
                  </CardContent>
                </CardMedia>
                <CardActions
                  sx={{
                    marginTop: 3,
                  }}
                >
                  <Button variant="contained" endIcon={<ShareIcon />}></Button>
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
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  color={blue[600]}
                >
                  {post?.createdAt?.toDate().toDateString()}
                </Typography>
              </Card>
            </Box>
          ))
        // : <h1>Loading....</h1>
      }
    </>
  );
}
