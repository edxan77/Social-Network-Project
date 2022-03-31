import React, {useState} from 'react';
import style from './end.module.css'
import {People} from '@mui/icons-material';
import {Logout} from '@mui/icons-material';

function Menu(props) {
        return (
       <div className={style.menu} style={{
           display: props.item === true ? "block":"none"
       }}>
           <div><People /><span>Profile</span></div>
           <div><Logout /><span>Logout</span></div>
       </div>
    );
}

export default Menu;