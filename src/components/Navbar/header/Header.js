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
// import { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import { doc, getDoc } from "firebase/firestore";
// import { ref } from 'firebase/database';
// import { onValue } from 'firebase/database';
// import {db, firebase} from '../../../lib/firebase';
import styles from './Header.module.css';


function Header(){
    // const [userName, setUserName] = useState("");
    // const { currentUser } = useContext(AuthContext);




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
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar className={styles.header} >
                <div className={styles.headerLeft}>
                    <img src='https://pbs.twimg.com/media/E00OY30VIA0caJB.jpg'/>
                    <div className={styles.headerSearch}>
                        <SearchIcon className={styles.searchIcon}/>
                        <input className={styles.search}  type='text' placeholder='Search Lightbook' />
                    </div>
                </div>
                <div className={styles.headerMiddle}>
                    <div className={styles.headerOption} id={styles.active}>
                        <HomeIcon fontSize='large'/>
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
                        <Typography variant='h6' className={styles.name}>
                            Dianna
                        </Typography>
                    </div>
                    <IconButton className={styles.rightBtn}>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton className={styles.rightBtn}>
                        <QuestionAnswerIcon/>
                    </IconButton>
                    <IconButton className={styles.rightBtn}>
                        <ArrowDropDownIcon/>
                    </IconButton>
                </div>
    
            </Toolbar>
          
        </Box>
      );
}
export default Header;