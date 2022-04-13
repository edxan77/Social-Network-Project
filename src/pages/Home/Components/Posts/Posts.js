import UserPosts from "../../../../components/Posts/UserPosts";
import { Box } from "@mui/system";

function Posts(){
    return(
        <Box sx={{
            marginTop:'100px', 
            marginLeft:'370px', 
            marginBottom:'100px',
            boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;', 
            backgroundColor:'#EAEAFF',
            padding:'15px',
            borderRadius:'20px'
        }}>
            <UserPosts/>
        </Box>
    )
}

export default Posts;