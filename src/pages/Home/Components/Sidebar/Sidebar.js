import SidebarOption from "./SidebarOption";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { getAllUsersById } from "../../../../Service/firestore";

const blank = '_blank';

function Sidebar(){

    const [userName, setUserName] = useState("");
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();
    function e(){
        return  navigate('/events');
    }

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
            <SidebarOption title={userName} src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'sx={{position:'relative'}} />
            <a href='https://www.worldometers.info/coronavirus/' target={blank} style={{textDecoration:'none', color:'#000'}} >
                <SidebarOption title='Covid 2019 information' src='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'/>
            </a>
            <SidebarOption title='Friends' src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' />
            <SidebarOption title='Groups' src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png'/>
            <SidebarOption title='Watch' src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png'/>
            <span onClick={e}><SidebarOption title='Events' src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png'  /></span>
            <SidebarOption title='Games' src='https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png'/>
        </Box>
    )
}

export default Sidebar;