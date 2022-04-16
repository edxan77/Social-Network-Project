// import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import Box from '@mui/material/Box';
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import MainUserFriends from '../../Folowing/MainUserFriends/MainUserFriendList'
import Friendlist from "../../Folowing/FriendList/Friendlist";
import Todo from "./Components/Todo/Todo";
// import { RedirectContext } from "../../RedirectProvider/RedirectProvider";
// import  {useContext, useEffect} from 'react';
// import { AuthContext } from "../../AuthProvider/AuthProvider";

function Home(){

    return(
        
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            gap:'50px'
        }}>
             
          
            {/* <Sidebar/> */}
            <Todo/>
            <Posts/>
            <RightSidebar/>

          <Friendlist/>
          <MainUserFriends/>
        </Box>
        
    )
}

export default Home;

  