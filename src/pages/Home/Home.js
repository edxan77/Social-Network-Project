import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
// import RightSidebar from "./Components/RightSidebar/RightSidebar";
import Box from '@mui/material/Box';


function Home(){
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            gap:'50px'
        }}>
            <Sidebar/>
            <Posts/>
            {/* <RightSidebar/> */}
           

        </Box>

    )
}

export default Home;

  