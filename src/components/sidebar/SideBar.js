import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom"
import "./sidebar.css"
import {RssFeed, Group, Photo} from "@mui/icons-material"
import Navigation from "../navigation/Navigation";
import getFriendsData from "../../helper/friendRequest";

function SideBar(props) {
    const [friend, setFriend] = useState("");
    useEffect(() => {
        getFriendsData().then(res => setFriend(res));
    }, []);

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
                        exact path={"/photo"}
                        linkClass={"sidebarListItem"}
                        icon={<Photo className={"sidebarIcon"}/>}
                        spanClass={"sidebarListText"}
                        name={"Photos"}
                    />
                </form>
                <hr/>
                <ul className={"friendList"}>
                    <li className={"sidebarListItem"}>
                        <Group className={"sidebarIcon"}/>
                        <span className={"sidebarListText"}>Friends</span>
                    </li>
                    {
                        friend === "" ? "Loading..." : friend.map(item =>
                        <div key={item.id}>
                            <Link to={"/friend/"+ item.id} className={"friend"}>
                                <img className={"friendImage"} src={item.url}/>
                                <span>{item.name}</span>
                            </Link>
                        </div>
                    )}
                </ul>
            </form>
        </nav>
    );
}

export default SideBar;