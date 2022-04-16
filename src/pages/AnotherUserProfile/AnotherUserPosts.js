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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';
import { firebase } from '../../lib/firebase';

export default function AnotherUserPosts(user) {
  const { currentUser } = useContext(AuthContext);
  const [newPosts, setNewPosts] = useState(null);
  const param = useParams();

  useEffect(() => {
    if (currentUser) {
      const usersRef = query(
        collection(firebase, 'posts'),
        where('uid', '==', param.id)
      );
      const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          const post = {
            ...doc.data(),
            id: doc.id,
          };
          data.push(post);
        });
        setNewPosts(data);
      });
      return () => unsubscribe();
    }
  }, [param]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
      }}
    >
      {newPosts &&
        newPosts.map((post) => (
          <Box
            key={post.id}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: 3,
              marginRight: 10,
              marginBottom: 5,
              borderRadius: 18,
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '50vw',
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
                  src={user?.users?.profile_picture}
                  sx={{
                    bgcolor: blue[600],
                    width: '6vw',
                    height: '6vw',
                    marginRight: 4,
                  }}
                >
                 <AccountCircleIcon></AccountCircleIcon>
                </Avatar>

                <h3 style={{ fontFamily: 'roboto' }}>
                  {user?.users?.firstName}
                </h3>

                <div>
                  <Button variant="outlined" size="small" color="primary">
                    Edit
                  </Button>

                  <IconButton aria-label="delete" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardActions>

              <CardMedia
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '35vw',
                  minHeight: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography variant="body1">{post.text}</Typography>
                </CardContent>
              </CardMedia>
              <CardActions
                sx={{
                  marginTop: 3,
                }}
              >
                <Button variant="contained" endIcon={<ShareIcon />}></Button>
                <Button variant="contained" endIcon={<ThumbUpIcon />}>
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
    </Box>
  );
}
