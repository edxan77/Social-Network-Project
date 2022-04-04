import { CardMedia, Container } from "@mui/material";
import AccountMenu from "../components/AccountMenu/AccountMenu";
import UserPosts from "../components/Posts/UserPosts";
import Image from '../static/maxresdefault.jpg';

function UserPage() {
  

    return (
      <Container fixed
      sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container fixed>
          <CardMedia component="img" height="140" src={Image} />
          <AccountMenu/>
        </Container>
  
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <UserPosts />
        </Container>
      </Container>
    );
  }
  
  export default UserPage;