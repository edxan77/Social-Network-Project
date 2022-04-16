/* eslint-disable no-unused-vars */
import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
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
import {  useNavigate } from 'react-router-dom';
import { auth } from '../../../lib/firebase';
import styles from './Header.module.css';


function Header(){
    
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const nav = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [isActive,setActive] = useState('home');

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box sx={{
            position: 'relative',
            top: 0,
            width: '100%',
            zIndex: 2000,
            backgroundColor: '#fff',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
          }}>
            <Toolbar id={styles.header} >
                <div className={styles.headerLeft}>
                    <img src='https://pbs.twimg.com/media/E00OY30VIA0caJB.jpg'/>
                </div>
                <div className={styles.headerMiddle}>
                    <div className={styles.headerOption} id={isActive === "home" ? styles.active : ''}  >
                        <HomeIcon fontSize='large' onClick={()=>{
                            setActive('home');
                            navigate('/home');
                        }}/>
                    </div>
                    <div className={styles.headerOption} id={`${isActive === "friends" ? styles.active : ''}`}>
                        <GroupIcon fontSize='large' onClick={()=> {
                            setActive('friends');
                            navigate('/friends');
                        }}/>
                    </div>
                    <div className={styles.headerOption} id={`${isActive === "games" ? styles.active : ''}`}>
                        <SportsEsportsIcon fontSize='large' onClick={()=> {
                            navigate('/games');
                            setActive('games');
                        }}/>
                    </div>
                </div>

                <div className={styles.headerRight}>
                
                       <div className={styles.headerInfo}   onClick={()=>{
                            setActive('info')
                            nav(`/${currentUser.uid}`)
                        }}>
                            <Avatar className={styles.avatar} src={currentUser?.photoURL} />
                            <Typography variant='h6' className={styles.name} >
                                {currentUser?.displayName.toString().split(' ')[0]}
                            </Typography>
                        </div>
                   
                    <IconButton  id={styles.rightBtns}>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton id={styles.rightBtns}>
                        <QuestionAnswerIcon/>
                    </IconButton>
                    <IconButton  id={styles.rightBtns}>
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
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                                marginTop:'20px',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={()=>{
                                auth.signOut();
                                navigate('/login');
                            }}>
                                <LogoutIcon/>
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