import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import Box from '@mui/material/Box';
import MainUserFriends from '../../Folowing/MainUserFriends/MainUserFriendList'
import {FollowProvider} from '../../Folowing/followprovider/FollowProvider'
import {AuthProvider} from '../../AuthProvider/AuthProvider'
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
            <div style={{height:'25px', border:'1px solid red',marginLeft:'0px',width:'50px',position:'absolute'}}>
                ggg
            </div>
<AuthProvider>
     <FollowProvider>
          <Friendlist></Friendlist>
          <MainUserFriends></MainUserFriends>
          </FollowProvider>
          </AuthProvider>
        </Box>
        
    )
}

export default Home;

  