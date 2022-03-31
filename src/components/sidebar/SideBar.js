import React from 'react';
import "./sidebar.css"
import {RssFeed, Group, Settings, YouTube, Photo} from "@mui/icons-material"

function SideBar(props) {
    return (
        <div className={"sidebar"}>
            <div className="sidebarWrapper">
                <ul className={"sidebarList"}>
                    <li className={"sidebarListItem"}>
                        <RssFeed className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Feed</span>
                    </li>
                    <li className={"sidebarListItem"}>
                        <YouTube className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Videos</span>
                    </li>
                    <li className={"sidebarListItem"}>
                        <Photo className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Photos</span>
                    </li>
                    <li className={"sidebarListItem"}>
                        <Settings className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Settings</span>
                    </li>
                </ul>
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
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                    <li className={"friend"}>
                        <img className={"friendImage"} src={"https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"}/>
                        <span>Name Surname</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;