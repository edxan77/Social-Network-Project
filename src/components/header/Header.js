import React from 'react';
import "./header.css"
import {Person, Search,Chat, Notifications} from "@mui/icons-material"
function Header(props) {
    return (
        <header className={"headerContainer"}>
            <div className="headerLeft">
                <span className={"logo"}>LiteBook</span>
            </div>
            <div className="headerCenter">
                <div className={"search"}>
                    <Search className={"searchIcon"}/>
                    <input className={"searchInput"}/>
                </div>
            </div>
            <div className="headerRight">
                <div className={"headerIcons"}>
                    <div className={"headerIconItem"}>
                        <Person/>
                        <span className={"headerIconCount"}>1</span>
                    </div>
                    <div className={"headerIconItem"}>
                        <Chat/>
                        <span className={"headerIconCount"}>1</span>
                    </div>
                    <div className={"headerIconItem"}>
                        <Notifications/>
                        <span className={"headerIconCount"}>1</span>
                    </div>
                </div>
                <div className={"headerLinks"}>
                    <span className={"headerLink"}>Name Surname</span>
                </div>
                <img src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"} alt={""} className={"headerImg"}/>
            </div>
        </header>
    );
}

export default Header;