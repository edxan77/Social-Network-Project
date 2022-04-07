import Sidebar from "./Components/Sidebar/Sidebar";
import Posts from "./Components/Posts/Posts";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import { Box } from "@mui/system";

function Home(){
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
        }}>
            <Sidebar/>
            <Posts/>
            <RightSidebar/>
           
        </Box>
    )
}

export default Home;