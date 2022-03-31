import style from "./header.module.css";
import React from "react";
import SearchComponent from "./search/SearchComponent";
import End from "./End/End";
import Avatar from "./avatar/Avatar";


const Header = () => {
    return (
            <header className={style.header}>
                <Avatar />
                <SearchComponent/>
                <End/>
            </header>
    );
};
export default Header;