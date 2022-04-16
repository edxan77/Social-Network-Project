import Friendlist from '../../Folowing/FriendList/Friendlist';
import MainUserFriends from '../../Folowing/MainUserFriends/MainUserFriendList';
import { Box } from '@mui/system';

function Friends() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 80px)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '30%',
          marginRight: 8,
        }}
      >
        <Friendlist />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '30%',
        }}
      >
        <MainUserFriends />
      </Box>
    </Box>
  );
}

export default Friends;
