import style from "./end.module.css";
import {Home, List, Notifications} from "@mui/icons-material";
import React, {useState} from "react";
import Menu from "./Menu";

const End=()=>{
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState(false);

    return(
            <div className={style.end}>
                <div>
                    <Notifications className={style.notifications} />
                </div>
                <div>
                    <Home className={style.home}/>
                </div>
                <div onClick={()=>{
                    setCount(count+1);
                    if (count % 2 === 0){
                        setMenu(true)
                    }else setMenu(false);
                }}>
                    <Menu item={ menu} />
                    <List className={style.list}/>
                </div>
            </div>


    );
};
export default End;