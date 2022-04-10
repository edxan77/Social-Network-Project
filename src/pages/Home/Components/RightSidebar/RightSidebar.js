import Friendlist from "../../../../Folowing/FriendList/Friendlist";
import { Box } from "@mui/system";

function RightSidebar(){
    return(
        <Box sx={{
        // marginTop:'100px', 
        // marginLeft:'50px', 
        // marginBottom:'100px',
        // backgroundColor:'#EAEAFF',
        // padding:'15px',
        // borderRadius:'20px'
        marginRight:'350px',
        // marginBottom:'400px'
    }}>
        <Friendlist/>
    </Box>
    )
}

export default RightSidebar;