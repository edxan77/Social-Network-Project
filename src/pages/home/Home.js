import React from 'react';
import './home.css'
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Content from "../../components/content/Content";

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