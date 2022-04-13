import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupIcon from '@mui/icons-material/Group';

import AppsIcon from '@mui/icons-material/Apps';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Typography, Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import { getAllUsersById } from '../../../Service/firestore';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../lib/firebase';
// import { Followcontext } from '../../../Folowing/followprovider/FollowProvider';
import styles from './Header.module.css';

function Header() {
  // const [userName, setUserName] = useState("");
  // const [img, setImg] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const {get,setget} = useContext(Followcontext)
  const handleClick = (event) => {
      event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  // useEffect(()=>[
  //         setget(get+1)
  // ],[])

  //     useEffect(() => {
  //         if (currentUser) {
  //           getAllUsersById(currentUser.uid).then((userData) => {
  //             setUserName(userData.map(data => data.firstName));
  //             setImg(userData.map(data => data.photoURL));
  //           });
  //         }
  //       }, [get]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2000,
        backgroundColor: '#fff',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      }}
    >
      <Toolbar id={styles.header}>
        <div className={styles.headerLeft}>
          <img src="https://pbs.twimg.com/media/E00OY30VIA0caJB.jpg" />
          <div className={styles.headerSearch}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.search}
              type="text"
              placeholder="Search Lightbook"
            />
          </div>
        </div>
        <div className={styles.headerMiddle}>
          <div className={styles.headerOption} id={styles.active}>
            <MenuBookIcon
              fontSize="large"
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
          <div className={styles.headerOption}>
            <GroupIcon fontSize="large" />
          </div>
          <div className={styles.headerOption}>
            <SportsEsportsIcon fontSize="large" />
          </div>
        </div>

        <div className={styles.headerRight}>
          <div
            className={styles.headerInfo}
            onClick={() => {
              nav(`/${currentUser.uid}`);
            }}
          >
            <Avatar className={styles.avatar} src={currentUser?.photoURL} />
            <Typography className={styles.name}>
              {/* {userName} */}
              {currentUser?.displayName.toString().split(' ')[0]}
            </Typography>
          </div>

          <IconButton id={styles.rightBtns}>
            <AppsIcon />
          </IconButton>
          <IconButton id={styles.rightBtns}>
            <QuestionAnswerIcon />
          </IconButton>
          <IconButton id={styles.rightBtns}>
            <ArrowDropDownIcon
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.32))',
                  mt: 3,
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 10,
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  auth.signOut();
                  navigate('/login');
                }}
              >
                <LogoutIcon />
                Logout
              </MenuItem>
            </Menu>
          </IconButton>
        </div>
      </Toolbar>
    </Box>
  );
}

export default Header;
