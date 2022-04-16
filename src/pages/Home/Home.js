/* eslint-disable no-unused-vars */
// import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import Box from '@mui/material/Box';
// import RightSidebar from "./Components/RightSidebar/RightSidebar";
import MainUserFriends from '../../Folowing/MainUserFriends/MainUserFriendList';
import Friendlist from "../../Folowing/FriendList/Friendlist";
import Todo from "./Components/Todo/Todo";

function Home(){

    return(
        
        <Box sx={{
            display:'flex',
            width: '100%',
            justifyContent: 'space-between'
        }}>

            <Todo/>

            <Posts/>
         

    <Box sx={{
        display: 'flex',
        flexDirection: 'column', 
        width: '20%',
    }}> 
    
  
          <Friendlist/>
           <MainUserFriends/>
          </Box>
        </Box>
    )
}

export default Home;

  