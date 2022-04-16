// import UserPosts from "../../../../components/Posts/UserPosts";
import { Box } from '@mui/system';
import NewsFeed from '../../../../components/Posts/postsComponents/NewsFeed';

function Posts() {
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
        boxShadow:
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
        padding: '10px',
        borderRadius: '20px',
      }}
    >
      <NewsFeed />
    </Box>
  );
}

export default Posts;
