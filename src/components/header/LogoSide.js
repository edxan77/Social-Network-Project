import React from 'react';
import {Link} from "react-router-dom";
import {Search} from "@mui/icons-material";

const LogoSide =(props)=> {
    console.log(props)
    return (
        <>
            <div className={props.className}>
                <Link to={props.path} className={props.logoClass}>{props.name}</Link>
            </div>
        </>
    );
}

export default LogoSide;