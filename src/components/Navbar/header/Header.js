import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupIcon from '@mui/icons-material/Group';

import AppsIcon from '@mui/icons-material/Apps';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { getAllUsersById } from '../../../Service/firestore';
import {  useNavigate } from 'react-router-dom';
import { auth } from '../../../lib/firebase';
import { Followcontext } from '../../../Folowing/followprovider/FollowProvider';
import styles from './Header.module.css';




function Header(){
    
    const [userName, setUserName] = useState("");
    const [img, setImg] = useState("");
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const nav = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {get,setget} = useContext(Followcontext);
    const [isActive,setActive] = useState('home');

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    
useEffect(()=>[
        setget(get+1)
],[])

    useEffect(() => {
        if (currentUser) {
          getAllUsersById(currentUser.uid).then((userData) => {
            setUserName(userData.map(data => data.firstName));
            setImg(userData.map(data => data.photoURL));
            // console.log(userData);
          });
        }
      }, [get]);


    // const [userName, setUserName] = useState("");
    // const { currentUser } = useContext(AuthContext);
    // useEffect(() => {
    //   if (currentUser) {
    //     const currentUserRef = ref(db, "users/" + currentUser.uid);
    //     onValue(currentUserRef, (snapshot) => {
    //       if (snapshot.exists()) {
    //         let data = snapshot.val();
    //         setUserName(data.firstName);
    //       }
    //     });
    //   }
    // }, [currentUser]);


    return (
        <Box sx={{ flexGrow: 1,  top:0, width:'100%',}}>
            <Toolbar id={styles.header} >
                <div className={styles.headerLeft}>
                    <img src='https://pbs.twimg.com/media/E00OY30VIA0caJB.jpg'/>
                    <div className={styles.headerSearch}>
                        <SearchIcon className={styles.searchIcon}/>
                        <input className={styles.search} type='text' placeholder='Search Lightbook'/>

                    </div>
                </div>
                <div className={styles.headerMiddle}>
                    <div className={styles.headerOption} id={isActive === "home" ? styles.active : ''}  >
                        <HomeIcon fontSize='large' onClick={()=>{
                            setActive('home');
                            navigate('/');
                        }}/>
                    </div>
                    <div className={styles.headerOption} id={`${isActive === "video" ? styles.active : ''}`}>
                        <OndemandVideoIcon fontSize='large' onClick={()=> setActive('video')}/>
                    </div>
                    <div className={styles.headerOption} id={`${isActive === "friends" ? styles.active : ''}`}>
                        <GroupIcon fontSize='large' onClick={()=> setActive('friends')}/>
                    </div>
                    <div className={styles.headerOption} id={`${isActive === "games" ? styles.active : ''}`}>
                        <SportsEsportsIcon fontSize='large' onClick={()=> setActive('games')}/>
                    </div>
                </div>

                <div className={styles.headerRight}>
                
                        <div className={styles.headerInfo} id={`${isActive === "games" ? styles.activeInfo : ''}`}  onClick={()=>{
                            setActive('info');
                            nav(`/${currentUser.uid}`)
                        }}>
                            <Avatar className={styles.avatar} src={img} />
                            <Typography variant='h6' className={styles.name} >
                                {userName}
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
