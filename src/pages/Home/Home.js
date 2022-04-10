import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import Box from '@mui/material/Box';
import {FollowProvider} from "../../Folowing/followprovider/followProvider"
import MainUserList from "../../Folowing/MainUserFriends/MainUserFriendList"
import Friendlist from "../../Folowing/FriendList/Friendlist";


function Home(){
    return(
        <FollowProvider>
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            gap:'50px'
        }}>
             
          
            <Sidebar/>
   
         
            <Posts/>
            <RightSidebar/>
           
      
            <MainUserList />
            <Friendlist/>
            
        
        </Box>
        </FollowProvider>
    )
}

export default Home;

  