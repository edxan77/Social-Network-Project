import React from 'react';
import {RssFeed} from "@mui/icons-material";
import { Link } from "react-router-dom"

function Navigation(props) {
    return (
        <>
            <Link to={props.path} className={props.linkClass}>
                {props.icon}
                <span className={props.spanClass}>{props.name}</span>
            </Link>
        </>
    );
}

export default Navigation;