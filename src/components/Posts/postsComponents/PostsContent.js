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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
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

  // if (newPosts && newPosts.length === 0) {
  //   return <h1>Write your first post</h1>;
  // }

  return (
    <>
      {newPosts &&
        newPosts?.map((post) => (
          <Box
            key={post.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 3,
              marginBottom: 5,
              borderRadius: 18,
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // maxWidth: '55vw',
                width: '40vw',
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
                    width: '6vw',
                    height: '6vw',
                    marginRight: 4,
                  }}
                >
                  {'Photo'}
                </Avatar>

                <h3 style={{fontFamily: 'roboto'}}>{post.profilName}</h3>

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
                  width: '35vw',
                  minHeight: 150,
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
                    <Typography variant='body1' >
                      {post.text}
                    </Typography >
                  )}
                </CardContent>
              </CardMedia>
              <CardActions
                sx={{
                  marginTop: 3,
                }}
              >
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
        ))}
    </>
  );
}
