import SidebarOption from "./SidebarOption";
import { Box } from "@mui/system";

function Sidebar(){
    return(
        <Box sx={{
            width:'400px',
            boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
            padding: '20px',
            position:'fixed'
        }}>
            <SidebarOption title='Dianna' src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' />
            <SidebarOption title='Covid 2019 information' src='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'/>
            <SidebarOption title='Friends' src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png'/>
            <SidebarOption title='Groups' src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png'/>
            <SidebarOption title='Watch' src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png'/>
            <SidebarOption title='Events' src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png'/>
            <SidebarOption title='Games' src='https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png'/>
        </Box>
    )
}

export default Sidebar;