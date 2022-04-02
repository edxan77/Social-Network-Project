import React from 'react';
import './home.css'
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Content from "../../components/content/Content";
import LogoutPage from "../logout/LogoutPage";

function Home(props) {
    return (
        <>
            <Header/>
            <div className={"homeContainer"}>
                <SideBar/>
                <Content/>
            </div>

        </>
    );
}

export default Home;