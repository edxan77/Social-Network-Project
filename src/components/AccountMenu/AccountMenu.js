import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Button
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { TextField } from '@material-ui/core';
import { storage } from '../../lib/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';


export default function AccountMenu() {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleImageChange(e){
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  }
  function handleSubmit(){
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image);
    getDownloadURL(imageRef).then((url)=>{
      setUrl(url);
    }).catch((err)=>{
      console.log(err.message);
      setImage(null);
    }).catch((error)=>{
      console.log(error.message);
    })
  }

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
        <Tooltip title="Account settings"
       
        >
          {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          > */}
            <Avatar
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
              sx={{
                bgcolor: deepPurple[500],
                width: 100,
                height: 100,
                marginTop: 2,
              }}
              src={url}
            />
          {/* </IconButton> */}
        </Tooltip>
        <TextField type='file' onChange={handleImageChange} />
        <Button onClick={handleSubmit}>submit</Button>
        <AddAPhotoIcon fontSize="medium" />
        </Box>
        <Typography gutterBottom variant="h5" sx={{ width: '25%' }}>
          Name Surname
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
        onClick={handleClose}
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
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

// export default AccountMenu;