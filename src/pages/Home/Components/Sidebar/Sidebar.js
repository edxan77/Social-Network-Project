import SidebarOption from "./SidebarOption";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { getAllUsersById } from "../../../../Service/firestore";

const blank = '_blank';

export default function Sidebar(){

    const [userName, setUserName] = useState("");
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
          getAllUsersById(currentUser.uid).then((userData) => {
            setUserName(userData.map(data => data.firstName));
            // console.log(userData);
          });
        }
      }, [currentUser]);



    return(
        <Box sx={{
            width:'350px',
            // boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
            padding: '20px',
            position:'fixed',
            marginTop:'75px'
        }}>
            
            <span onClick={()=> navigate('/user-profile')}><SidebarOption title={userName} src={currentUser?.photoURL} sx={{position:'relative'}} /></span>
            <a href='https://www.worldometers.info/coronavirus/' target={blank} style={{textDecoration:'none', color:'#000'}} >
                <SidebarOption title='Covid 2019 information' src='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'/>
            </a>
            <span onClick={()=> navigate('/friends')}><SidebarOption title='Friends' src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' /></span>
            <SidebarOption title='Groups' src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png'/>
            <SidebarOption title='Watch' src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png'/>
            <span onClick={()=> navigate('/events')}><SidebarOption title='Events' src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png'  /></span>
            <SidebarOption title='Games' src='https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png'/>
        </Box>
    )
}