import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from '@mui/material';
import styles from  './SidebarOption.module.css';

function SidebarOption({src,title}){
    return(
        <Box className={styles.row} sx={{
            display:'flex',
            alignItems:'center',
            padding:'2px 20px',
        }}>
<<<<<<< HEAD
            {src && <Avatar src={src}/>}
=======
            {src ?  <Avatar src={src} /> : <Avatar/>}
>>>>>>> develop
            <Typography paragraph={true} id={styles.paragraph}>
                {title}
            </Typography> 
        </Box>
    )
}

export default SidebarOption;