import Box from '@mui/material/Box';
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
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import {useState} from 'react';

import {auth} from '../../../lib/firebase'

function Header(){
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1, position:'fixed', top:0, width:'100%'}}>
            <Toolbar className={styles.header} >
                <div className={styles.headerLeft}>
                    <img src='https://pbs.twimg.com/media/E00OY30VIA0caJB.jpg'/>
                    <div className={styles.headerSearch}>
                        <SearchIcon className={styles.searchIcon} />
                        <input className={styles.search}  type='text' placeholder='Search Lightbook' />
                    </div>
                </div>
                <div className={styles.headerMiddle}>
                    <div className={styles.headerOption} id={styles.active}>
                        <HomeIcon fontSize='large' onClick={()=>{
                            navigate('/');
                        }}/>
                    </div>
                    <div className={styles.headerOption}>
                        <OndemandVideoIcon fontSize='large'/>
                    </div>
                    <div className={styles.headerOption}>
                        <GroupIcon fontSize='large'/>
                    </div>
                    <div className={styles.headerOption}>
                        <SportsEsportsIcon fontSize='large'/>
                    </div>
                </div>

                <div className={styles.headerRight}>
                    <div className={styles.headerInfo}>
                        <Avatar className={styles.avatar}/>
                        <Typography variant='h6' component='h6' className={styles.name}>
                            Dianna
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
                                marginTop:'20px'
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