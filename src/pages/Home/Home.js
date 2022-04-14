import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import Box from '@mui/material/Box';
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import MainUserFriends from '../../Folowing/MainUserFriends/MainUserFriendList'
import Friendlist from "../../Folowing/FriendList/Friendlist";

function Home(){

    return(
        
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            gap:'50px'
        }}>
             
          
            <Sidebar/>
            <Posts/>
            <RightSidebar/>

          <Friendlist/>
          <MainUserFriends/>
        </Box>
        
    )
}

export default Home;

  