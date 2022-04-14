// eslint-disable-next-line no-unused-vars
import { Avatar, Box, Button, CardMedia, Container, TextField } from '@mui/material';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AddNewPostForm from '../../components/Posts/postsComponents/AddNewPostForm';
import PostsContent from '../../components/Posts/postsComponents/PostsContent';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { getAllUsersById } from '../../Service/firestore';
import {UrlContext} from '../../UrlProvider/UrlProvider'
import {useEffect,useContext, useState} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function UserProfile() {

  const [img, setImg] = useState();
  const {currentUser} = useContext(AuthContext);
  const {handleSubmit, handleImageChange, setLoading, loading, url, key, deleteImg} = useContext(UrlContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (currentUser) {
      getAllUsersById(currentUser.uid).then((userData) => {
        setImg(userData.map(data => data.backgroundImg));
        // console.log(userData);
      });
    }
  }, [currentUser, img, !img]);

    useEffect(()=>{
      setLoading(false);
    },[url])

 

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
      {loading ? <div  style ={{
          boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
          borderBottomLeftRadius:'12px',
          borderBottomRightRadius:'12px',
          width:'1000px',
          height:'380px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }} 
        
        src={img ? `${img}` : ''}>{loading && <img src='http://www.avalonparis.com/wp-content/uploads/2017/01/loading5.gif'/>}</div> : 
        <CardMedia component="img" height="380" sx={{
            boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
            borderBottomLeftRadius:'12px',
            borderBottomRightRadius:'12px',
            width:'1000px' 
          }} 
          src={img ? `${img}` : ''}
        /> }
        

        <div>
            <Button onClick={handleClick} 
            style={{position:'absolute', marginLeft: '350px', marginBottom:'200px', color:'#000', backgroundColor:'fff'}}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <h4 style={{color:'#000', textTransform:'capitalize'}}>{img ? 'Edit photo' : 'Add photo'}</h4>
          <PhotoCameraIcon fontSize='medium' />
          </Button> 
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem >
          <form onSubmit={handleSubmit}>
          <input type='file' onChange={handleImageChange}  />
          <Button onClick={handleSubmit} style={{textTransform:'capitalize'}}>Upload</Button>
          </form>
        </MenuItem>
        <MenuItem style={{  
          display:'flex',
          justifyContent:'center',
          alignItems:'center'}}
        > 
          <Button onClick={()=> deleteImg(key)} style={{textTransform:'capitalize'}}>delete image</Button>
        </MenuItem> 
      </Menu>
    </div>
        
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
