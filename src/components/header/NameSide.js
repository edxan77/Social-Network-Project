import React from 'react';
import { Link } from "react-router-dom"
const NameSide =(props)=> {
    return (
            <Link to={props.path} className={props.className}>
                <span className={props.spanClass}>{props.name }</span>
            </Link>
    );
};

export default NameSide;