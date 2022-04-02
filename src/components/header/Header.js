import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import {Group, Search, Chat, Notifications, AddAPhoto, Logout} from "@mui/icons-material"
import NotificationList from "../navigation/NotificationList";
import LogoutPage from "../../pages/logout/LogoutPage";
import LogoSide from "./LogoSide";
import SearchSide from "./SearchSide";
import NameSide from "./NameSide";

function Header(props) {
    return (
        <header className={"headerContainer"}>
            <LogoSide
                className="headerLeft"
                path="/"
                logoClass="logo"
                name="LifeBook"
            />
            <SearchSide
                className="headerCenter"
                searchClass="search"
                searchIcon="searchIcon"
                searchInput="searchInput"
            />
            <div className="headerRight">
                <div className={"headerIcons"}>
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Group/>}
                        spanClass={"headerIconCount"}
                        count={"2"}
                    />
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Chat/>}
                        spanClass={"headerIconCount"}
                        count={"1"}
                    />
                    <NotificationList
                        className={"headerIconItem"}
                        icon={<Notifications/>}
                        spanClass={"headerIconCount"}
                        count={"9+"}
                    />
                </div>
                <NameSide
                    path={"/user-page"}
                    className="headerLinks"
                    spanClass="headerLink"
                    name="Bagrat Grigoryan"
                    age="29"
                />
                <div className={"avatar"}>
                    <img
                        src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}
                        alt={""} className={"headerImg"}/>
                    <div>
                        <label><AddAPhoto className={"addAvatar"}/>
                            <input type={"file"} name="file" accept="image/*"/>
                        </label>
                    </div>
                </div>
            </div>
            <Link to={"/logout"} className={"logout"} onClick={() => {
                <LogoutPage/>
            }}>
                <Logout className={"logoutBtn"}/>
            </Link>
        </header>
    );
}
export default Header;