import React from 'react';
import "./sidebar.css"
import {RssFeed, Group, Settings, YouTube, Photo} from "@mui/icons-material"
import Navigation from "../navigation/Navigation";
function SideBar(props) {
    return (
        <nav className={"sidebar"}>
            <form className="sidebarWrapper">
                <form className={"sidebarList"}>
                    <Navigation
                        exact path={"/"}
                        linkClass={"sidebarListItem"}
                        icon={<RssFeed className={"sidebarIcon"}/>}
                        spanClass={"sidebarListText"}
                        name={"Feed"}
                    />
                    <Navigation
                        exact path={"/video"}
                        linkClass={"sidebarListItem"}
                        icon={<YouTube className={"sidebarIcon"}/>}
                        spanClass={"sidebarListText"}
                        name={"Video"}
                    />
                    <Navigation
                        exact path={"/photo"}
                        linkClass={"sidebarListItem"}
                        icon={<Photo className={"sidebarIcon"}/>}
                        spanClass={"sidebarListText"}
                        name={"Photos"}
                    />
                    <Navigation
                        exact path={"/settings"}
                        linkClass={"sidebarListItem"}
                        icon={<Settings className={"sidebarIcon"}/>}
                        spanClass={"sidebarListText"}
                        name={"Settings"}
                    />
                </form>
                <hr/>
                <ul className={"friendList"}>
                    <li className={"sidebarListItem"}>
                        <Group className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Friends</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                         <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                </ul>
            </form>
        </nav>
    );
}

export default SideBar;