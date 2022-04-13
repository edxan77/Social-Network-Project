// eslint-disable-next-line no-unused-vars
import { Avatar, Box, Button, CardMedia, Container, TextField } from '@mui/material';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AddNewPostForm from '../../components/Posts/postsComponents/AddNewPostForm';
import PostsContent from '../../components/Posts/postsComponents/PostsContent';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { getAllUsersById } from '../../Service/firestore';
import {UrlContext} from '../../UrlProvider/UrlProvider'
import {useEffect,useContext, useState, useRef} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

function UserProfile() {

  const [img, setImg] = useState();
  const {currentUser} = useContext(AuthContext);
  const {handleSubmit, handleImageChange} = useContext(UrlContext);
  const inputRef = useRef(null) 

  useEffect(() => {
    if (currentUser) {
      getAllUsersById(currentUser.uid).then((userData) => {
        setImg(userData.map(data => data.backgroundImg));
        // console.log(userData);
      });
    }
  }, [currentUser, img]);

  const onButtonClick = () => {
    console.log(inputRef.current.click());
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // width: '700',
        maxWidth: 'md',
        alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      {/* <Container  sx={{
        display: 'flex',
        // flexDirection: 'column',
        // width: '700',
        maxWidth: 'md',
        alignItems: 'center',
        justifyContent: 'center',
      }}> */}
        <CardMedia component="img" height="380" sx={{
          boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
          borderBottomLeftRadius:'12px',
          borderBottomRightRadius:'12px',
          width:'1000px' 
        }} 
        src={img}/>
        {img ?
          <Button onClick={onButtonClick} style={{position:'absolute', marginLeft:'820px', marginTop:'320px', backgroundColor:'#fff', color:'#000'}}>
          <h4 style={{color:'#000', textTransform:'capitalize'}}>Edit photo</h4>
          <PhotoCameraIcon fontSize='medium' />
          </Button> :
           <Button onClick={onButtonClick} style={{position:'absolute', marginLeft:'820px', marginTop:'320px', backgroundColor:'#fff', color:'#000'}}>
           <h4 style={{color:'#000', textTransform:'capitalize'}}>Add photo</h4>
           <PhotoCameraIcon fontSize='medium' />
           </Button>
        }
      
        <form onSubmit={handleSubmit}>
         <input type='file' onChange={handleImageChange} ref={inputRef} style={{display:'none'}} />
          <Button onClick={handleSubmit}>submit</Button>
        </form>
        
        <AccountMenu />
      {/* </Container> */}

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
