/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState ,useContext} from 'react';
import { addPost } from '../../../Service/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from '../../../lib/firebase';
import './addNewPostForm.css';
// import { AccountCircle } from '@material-ui/icons';
import { Followcontext } from '../../../Folowing/followprovider/FollowProvider';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



export default function AddNewPostForm() {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState('');
  const {userInfo} = useContext(Followcontext)
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    try {
      await addPost({
        text: text,
        createdAt: serverTimestamp(),
        uid: currentUser.uid,
        adress: userInfo.adress,
        likes: 0
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    setText('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 3,
      }}
    >
      <form onSubmit={onSubmit} className="main-input-form">

      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', marginBottom: 0 }}>

        <TextField
          multiline
          rows={3}
          fullWidth
          label="Make Your Post"
          id="standard-multiline-static"
          variant="filled"
          value={text}
          onChange={handleChange}
          sx={{
            backgroundColor: '#d4f0ff',
  
          }}
          inputProps={{ style: { color: "black" } }}
        />
</Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '38vw',
          }}
        >
          Post
        </Button>
      </form>
    </Box>
  );
}