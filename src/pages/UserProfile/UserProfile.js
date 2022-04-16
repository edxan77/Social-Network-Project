// eslint-disable-next-line no-unused-vars
import { Box, Button, CardMedia, Container } from '@mui/material';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AddNewPostForm from '../../components/Posts/postsComponents/AddNewPostForm';
import PostsContent from '../../components/Posts/postsComponents/PostsContent';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import { getAllUsersById } from '../../Service/firestore';
import { UrlContext } from '../../UrlProvider/UrlProvider';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import {firebase} from '../../lib/firebase'

function UserProfile() {
  const [img, setImg] = useState();
  const { currentUser } = useContext(AuthContext);
  const {
    handleSubmit,
    handleImageChange,
    setLoading,
    loading,
    url,
    key,
    deleteImg,
  } = useContext(UrlContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   if (currentUser) {
  //     getAllUsersById(currentUser.uid).then((userData) => {
  //       setImg(userData.map((data) => data.backgroundImg));
  //     });
  //   }
  // }, [currentUser, img]);

  useEffect(() => {
    if (currentUser) {
      const usersRef = query(
        collection(firebase, 'users'),
        where('id', '==', currentUser.uid),
      );
      const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
  
        querySnapshot.docs.map((doc) => {
                setImg(doc.data().backgroundImg);
                console.log(img)
        });
  
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  useEffect(() => {
    setLoading(false);
  }, [url]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'xl',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: 'lg',
          width: '100%',
          // backgroundColor: '#bcc0c4',
          backgroundImage: 'linear-gradient(#F0F2F5, #E7E9EB, #BABBBE, #A5A6A9)',
          filter: 'drop-shadow(0px 3px 8px rgba(0,0,0,0.32))',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        {loading ? (
          <div
            style={{
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              height: '23vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}
          >
            {loading && (
              <img src="http://www.avalonparis.com/wp-content/uploads/2017/01/loading5.gif" />
            )}
          </div>
        ) : (
          <CardMedia
            component="img"
            sx={{
              height: '23vw',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
            }}
            src={img ? `${img}` : ''}
          />
        )}

<Box sx={{
  position: 'absolute',
  bottom: '1px',
  right: '1px',
}}>
          <Button
            onClick={handleClick}
            style={{
              color: '#000',
              backgroundColor: '#d4e3fa',
              borderRadius: 2
          
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <h4 style={{ color: '#000', textTransform: 'capitalize' }}>
              {img ? 'Edit Photo' : 'Add Photo'}
            </h4>
            <PhotoCameraIcon fontSize="medium" color="primary" />
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
            <MenuItem>
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                <Button
                  onClick={handleSubmit}
                  style={{ textTransform: 'capitalize' }}
                >
                  Upload
                </Button>
              </form>
            </MenuItem>
            <MenuItem
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                onClick={() => deleteImg(key)}
                style={{ textTransform: 'capitalize' }}
              >
                delete image
              </Button>
            </MenuItem>
          </Menu>
          </Box>
      </Box>

      <AccountMenu />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '48%',
          justifyContent: 'center',
          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
          marginTop: 5,
        }}
      >
        <AddNewPostForm />
        <PostsContent />
      </Container>
    </Container>
  );
}

export default UserProfile;
