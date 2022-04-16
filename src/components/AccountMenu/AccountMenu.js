/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Input,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { upload } from '../../Service/firestore';
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firebase } from '../../lib/firebase';
import { handleUserEdit } from '../Posts/postsComponents/utils';
import './AccountMenu.css';

export default function AccountMenu() {
  const { currentUser } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [newText, setNewText] = useState('');

  const profilCreationTime = new Date(
    `${currentUser?.metadata.creationTime}`
  ).toDateString();

  const onChange = (e) => {
    e.stopPropagation();
    setName(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();

    if (name.trim()) {
      updateProfile(currentUser, {
        displayName: name,
      })
        .then(() => {
          setName('');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  async function handleClick() {
    upload(photo, currentUser, setLoading);

    if (currentUser) {
      const id = currentUser?.uid;
      const userRef = doc(firebase, 'users', id);
      await updateDoc(userRef, {
        profile_picture: currentUser?.photoURL,
      });
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (currentUser) {
      const userRef = query(
        collection(firebase, 'users'),
        where('id', '==', currentUser?.uid)
      );
      const unsubscribe = onSnapshot(userRef, (querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          const user = {
            ...doc.data(),
            id: doc.id,
          };
          data.push(user);
        });
        setUser(...data);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  const handleUserChange = (e) => {
    e.stopPropagation();
    setNewText(e.target.value);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 3,
          padding: 3,
          paddingBottom: 4,
          backgroundColor: '#d4e3fa',
          filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.32))',
          borderRadius: 3,
          zIndex: 500,
        }}
      >
        {/* <Box> */}
        <Tooltip title="Account settings" width="15%">
          <Avatar
          className='main-menu'
            src={currentUser?.photoURL}
            onClick={handleclick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{
              bgcolor: deepPurple[500],
              width: '10vw',
              height: '10vw',
              filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.32))',
            }}
          >
            B
          </Avatar>
        </Tooltip>
        {/* </Box> */}

        <Typography gutterBottom width="20%"  variant='h6' 
        >
          {currentUser?.displayName}
        </Typography>

        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <Box
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
            }}
          >
            {user?.isEdit ? (
              <form
                id="edit-input-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const usersRef = doc(firebase, 'users', user.id);
                  if (!newText.trim()) {
                    await updateDoc(usersRef, {
                      isEdit: false,
                    });
                  } else {
                    await updateDoc(usersRef, {
                      isEdit: false,
                      about: newText,
                    });
                  }
                  setNewText('');
                }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  onChange={handleUserChange}
                  defaultValue={user.about}
                ></TextField>

                <Button type="submit" variant="contained">
                  Edit
                </Button>
              </form>
            ) : (
              <Typography variant="h6" component="h2">
                {user?.about}
              </Typography>
            )}

            <DriveFileRenameOutlineIcon
              color="primary"
              sx={{ marginLeft: 5 }}
              onClick={() => handleUserEdit(user.id)}
            >
              Edit
            </DriveFileRenameOutlineIcon>
          </Box>

          <Typography mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CalendarMonthIcon color="primary" /> Joined {profilCreationTime}
          </Typography>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            // width: 350,
            overflow: 'visible',
            filter: 'drop-shadow(0px 5px 12px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 42,
              height: 42,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 150,
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
          <PhotoCamera color="primary" />
          Set Profile Image
        </MenuItem>
        <MenuItem>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleChange}
            />
          </label>
        </MenuItem>
        <MenuItem>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={loading || !photo}
            onClick={handleClick}
          >
            {'Update'}
          </Button>
        </MenuItem>
        <Divider />
        <MenuItem>
          <DriveFileRenameOutlineIcon color="primary" /> Change DisplayName
        </MenuItem>
        <MenuItem>
          <form
            onSubmit={onSubmit}
            style={{ display: 'flex', alignItems: 'start' }}
          >
            <Input
              onChange={onChange}
              defaultValue={currentUser?.displayName}
            ></Input>
            <Button
              color="primary"
              type="submit"
              variant="outlined"
              sx={{ marginTop: 1 }}
            >
              {'Update'}
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}