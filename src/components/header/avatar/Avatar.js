import style from "./avatar.module.css";
import React from "react";
import { AddAPhoto } from '@mui/icons-material';
const Avatar=()=>{
    return(
        <div className={style.avatar}>
            <div className={style.first}>
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"/>
                <AddAPhoto className={style.photo}/>
            </div>
            <div className={style.namespase}>
                <span>Name Surname</span>
            </div>
        </div>

    );
}
export default Avatar;