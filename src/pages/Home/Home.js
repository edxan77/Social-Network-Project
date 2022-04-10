import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import Box from '@mui/material/Box';
import { FollowProvider } from "../../Folowing/followprovider/FollowProvider";
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
      <FollowProvider>
          <Friendlist></Friendlist>
      </FollowProvider>
        
        </Box>
        
    )
}

export default Home;

  