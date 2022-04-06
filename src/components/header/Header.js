import React from 'react';
import "./header.css"
import {Group, Chat, Notifications, AddAPhoto} from "@mui/icons-material"
import NotificationList from "../navigation/NotificationList";
import LogoSide from "./LogoSide";
import SearchSide from "./SearchSide";
import NameSide from "./NameSide";
import MenuListComposition from "./MenuListComposition";

function Header() {
    return (
        <header className={"headerContainer"}>
            <LogoSide
                className="headerLeft"
                path="/"
                logoClass="logo"
                name="Lightbook"
            />
            <SearchSide
                className="headerCenter"
                searchClass="search"
                searchIcon="searchIcon"
                searchInput="searchInput"
            />
            <div className="headerRight">
                <NameSide
                    path={"/user-page"}
                    className="headerLinks"
                    spanClass="headerLink"
                    name="Bagrat"

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
                    <NotificationList
                        className={"headerMenuIcon"}
                        icon={  <MenuListComposition/>}

                    />


                </div>
            </div>
        </header>
    );
}

export default Header;