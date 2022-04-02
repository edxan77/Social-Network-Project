import React from 'react';
import { Link } from "react-router-dom";
import "./header.css"
import {Group, Search, Chat, Notifications, AddAPhoto, Logout} from "@mui/icons-material"
import NotificationList from "../navigation/NotificationList";
import LogoutPage from "../../pages/logout/LogoutPage";

function Header(props) {
    return (
        <header className={"headerContainer"}>
            <div className="headerLeft">
                <span className={"logo"}>LifeBook</span>
            </div>
            <div className="headerCenter">
                <div className={"search"}>
                    <Search className={"searchIcon"}/>
                    <input className={"searchInput"}/>
                </div>
            </div>
            <div className="headerRight">
                <div className={"headerIcons"}>
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Group />}
                        spanClass={"headerIconCount"}
                        count={"2"}
                    />
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Chat />}
                        spanClass={"headerIconCount"}
                        count={"1"}
                    />
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Notifications />}
                        spanClass={"headerIconCount"}
                        count={"9+"}
                    />
                </div>
                <div className={"headerLinks"}>
                    <span className={"headerLink"}>Name Surname</span>
                </div>
                <div className={"avatar"}>
                    <img src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"} alt={""} className={"headerImg"}/>
                    <AddAPhoto className={"addAvatar"} />
                </div>
            </div>
            <Link to={"/logout"} className={"logout"} onClick={()=>{
              <LogoutPage />
            }} >
                <Logout className={"logoutBtn"} />
            </Link>
        </header>
    );
}

export default Header;