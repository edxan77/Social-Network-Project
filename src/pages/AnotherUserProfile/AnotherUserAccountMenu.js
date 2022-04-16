import { Avatar, Box, CardMedia, Tooltip, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function AnotherUserAccountMenu(user) {

    // const profilCreationTime = new Date(
    //     `${user.users?.metadata.creationTime}`
    //   ).toDateString();

    return (
        <>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'lg',
          width: '100%',
          backgroundColor: '#5d70fc',
        }}
      >
          <CardMedia
            component="img"
            sx={{
              height: '25vw',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
            }}
            src={user?.users.backgroundImg}
          />

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
        </div>
      </Box>
       { user &&
        
        <Box
        sx={{
          display: 'flex',
          width: 'calc(100% - 150px);',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 5,
          padding: 3,
          paddingBottom: 4,
          backgroundColor: '#d4e3fa',
          filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.32))',
          borderRadius: 3,
          zIndex: 500,
        }}
      >
        {/* <Box> */}
        <Tooltip title="Account settings" width="15%">
          <Avatar
          className='main-menu'
            src={user?.users?.profile_picture}
            sx={{
              bgcolor: deepPurple[500],
              width: '10vw',
              height: '10vw',
              filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.32))',
            }}
          >
            B
          </Avatar>
        </Tooltip>
        {/* </Box> */}

        <Typography gutterBottom width="20%"  variant='h6' 
        >
          {user?.users?.displayName}
        </Typography>

        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <Box
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
            }}
          >
            
              <Typography variant="h6" component="h2">
                {user?.users?.about}
              </Typography>

            <DriveFileRenameOutlineIcon
              color="primary"
              sx={{ marginLeft: 5 }}
            >
              Edit
            </DriveFileRenameOutlineIcon>
          </Box>

          <Typography mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CalendarMonthIcon color="primary" /> Joined {user?.users?.profilCreationTime}
          </Typography>
        </Box>
      </Box>}
      </>
    );
}