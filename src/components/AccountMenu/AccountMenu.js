/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import { upload } from '../../Service/firestore';

export default function AccountMenu() {
  const { currentUser } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
  );
const [name, setName] = useState("");
const auth = getAuth();

const onChange = (e) => {
  e.stopPropagation();
  setName(e.target.value);
};

function onSubmit (e) {
  e.preventDefault();
  // if (!name.trim()) 
updateProfile(auth.currentUser, {
  displayName: name, 
  // photoURL: {photoURL}
}).then(() => {
  console.log('Profile updated!')
  setName('')
  // ...
}).catch((error) => {
  console.log(error)
  // ...
})
// setName("")
}
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 5,
        }}
      >
        <Box>
          <Tooltip title="Account settings">
            <Avatar
              src={photoURL}
              onClick={handleclick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{
                bgcolor: deepPurple[500],
                width: 100,
                height: 100,
                marginTop: 2,
              }}
            >
              B
            </Avatar>
          </Tooltip>
        </Box>
        <Typography gutterBottom variant="h5" sx={{ width: '25%' }}>
          {auth.currentUser?.displayName}
        </Typography>
        <Typography sx={{ width: '50%' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi
          quos dignissimos facilis beatae.
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <input type="file" onChange={handleChange} />
        </MenuItem>
        <Divider />
        <MenuItem>
          <button disabled={loading || !photo} onClick={handleClick}>
            <AddAPhotoIcon fontSize="medium" />
          </button>
        </MenuItem>
        <Divider />
        <MenuItem>
          <form onSubmit={onSubmit}>
            <input onChange={onChange}></input>
          </form>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
