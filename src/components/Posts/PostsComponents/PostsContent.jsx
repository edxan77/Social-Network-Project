/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { blue, lightGreen } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useEffect, useState } from "react";
import { getAllPostsById, getAllUsersById } from "../../../Service/firestore";
import { auth } from "../../../lib/firebase";
import { firebase } from '../../../lib/firebase';
import { updateProfile } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { userUid } from "../../../Service/firestore";



export default function Posts() {

  const user = auth.currentUser;

 

// const auth = getAuth();

// const [name, setName] = useState(null)

// if (user !== null) {
//   user.providerData.forEach((profile) => {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }


// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   // console.log("  user UID: " + user.uid);
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;

// // console.log(user)
// }


// console.log(user)


  
  // const dispatch = useDispatch();

  // const posts = useSelector(function (state) {
  //   return state.post.posts;
  // });

  // const { user } = AuthProvider();
  // console.log(user)

// console.log(posts)

  const [newPosts, setNewPosts] = useState(null);

  // console.log(newPosts)
  const [users, setUser] = useState(null);

  // console.log(users)

  const[loading, setIsLoading] = useState(false)

  useEffect(() => {
    // let isApiSubscribed = true;
    setIsLoading(false)
   if(user){
      getAllUsersById(user.uid).then((postData) => (setUser(postData)))
      getAllPostsById(user.uid).then((data) => (setNewPosts(data)));
      
      setIsLoading(true)
     
    }
  //   return () => {
  //     // cancel the subscription
  //     // isApiSubscribed = false;
  //     setIsLoading(false)
  // };
  }, [newPosts]);

  // // useEffect(() => {
  // //   // let isApiSubscribed = true;
  // //   if(user){
  // //     setIsLoading(true)
  // //      getAllUsersById(user.uid).then((postData) => (setUser(postData)))
  // //      setIsLoading(false)
  // //     //  getAllPostsById(user.uid).then((data) => (setNewPosts(data)));
      
  // //    }
  // // //    return () => {
  // // //     // cancel the subscription
  // // //     // isApiSubscribed = false;
  // // //     setIsLoading(false)
  // // // };
  // //  }, [user]);



  // useEffect(() => {
  //   if (user !== null) {
  //     user.providerData.forEach((profile) => {
  //      setName(profile.displayName)
  //     });
  //   }
  //   }, []);

// useEffect(() => {
//   if(user){ 
//   getAllUsersById(user.uid).then((data) => {
//     setUser(data);
//   })
// }
// }, [user]);

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

  return (
    <>
      { loading ? 
      
      newPosts?.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "700",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              marginTop: 6,
              borderRadius: 8,
              bgcolor: lightGreen["50"],
            }}
          >
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: blue[600],
                  width: 85,
                  height: 85,
                }}
              >
                {"Photo"}
              </Avatar>

              <Typography gutterBottom variant="h5" sx={{ width: "50%" }}>
             {users?.map(user => `${user.firstName} ${user.lastName}`)}

         {/* {name} */}
              </Typography>
            </CardActions>

            <CardMedia
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 500,
                minHeight: 300,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
              <Button variant="contained" endIcon={<ThumbUpIcon />}></Button>
            </CardActions>
          </Card>
        </Box>
      )) : <h1>Loading....</h1>}
    </>
  );
}
