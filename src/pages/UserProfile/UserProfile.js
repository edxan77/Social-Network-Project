// eslint-disable-next-line no-unused-vars
import { Box, CardMedia, Container } from '@mui/material';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AddNewPostForm from '../../components/Posts/postsComponents/AddNewPostForm';
import PostsContent from '../../components/Posts/postsComponents/PostsContent';
// import UserPosts from "../../components/Posts/UserPosts";

import Image from '../../static/maxresdefault.jpg';

function UserProfile() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // width: '700',
        maxWidth: 'md',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <CardMedia component="img" height="140" src={Image} />
        <AccountMenu />
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '700',
          // maxWidth: 'sm',
          // alignSelf: 'center',
          // justifySelf: 'center',
        }}
      >
        {/* <UserPosts/> */}
        <AddNewPostForm />
        <PostsContent />
      </Container>
    </Container>
  );
}

export default UserProfile;
