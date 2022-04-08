import { CardMedia, Container } from "@mui/material";
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import AddNewPostForm from "../../components/Posts/postsComponents/AddNewPostForm";
import PostsContent from "../../components/Posts/postsComponents/PostsContent";
// import UserPosts from "../../components/Posts/UserPosts";

import Image from '../../static/maxresdefault.jpg';

function UserProfile() {
  

    return (
      <Container 
      sx={{
          // display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container >
          <CardMedia component="img" height="140" src={Image} />
          <AccountMenu/>
        </Container>
  
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          maxWidth: '90%',
          alignSelf: 'center',
          justifySelf: 'center',
        }}>
           {/* <UserPosts/> */}
           <AddNewPostForm/>
     <PostsContent/>
        </Container>
      </Container>
    );
  }
  
  export default UserProfile;