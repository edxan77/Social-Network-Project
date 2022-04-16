import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url(https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages2.alphacoders.com%2F114%2Fthumb-1920-1147364.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          color="#fff"
          marginBottom={4}
          letterSpacing="5px"
        >
          Welcome
        </Typography>
        <div>
          <Typography
            variant="h2"
            color="#035F8A"
            marginBottom={7}
            letterSpacing="5px"
          >
            to Lightbook
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '20px',
          marginBottom: '45px',
        }}
      >
        <Button
          onClick={() => navigate('/login')}
          variant="outlined"
          sx={{
            letterSpacing: '2px',
            color: '#0671a2',
            fontSize: '14px',
          }}
          size="large"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          variant="outlined"
          sx={{ color: '#fff', fontSize: '14px' }}
          size="large"
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
export default Welcome;
