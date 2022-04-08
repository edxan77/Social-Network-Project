/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { addPost } from '../../../Service/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from '../../../lib/firebase';
import './addNewPostForm.css';
import { AccountCircle } from '@material-ui/icons';

export default function AddNewPostForm() {
  const [text, setText] = useState('');

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
        uid: auth.currentUser.uid,
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
        width: '100%',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <form onSubmit={onSubmit} className="main-input-form">

      <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', marginBottom: 1 }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

        <TextField
          multiline
          rows={3}
          fullWidth
          label="Make Your Post"
          id="standard-multiline-static"
          variant="standard"
          value={text}
          onChange={handleChange}
          sx={{
          }}
        />
</Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 600,
          }}
        >
          Post
        </Button>
      </form>
    </Box>
  );
}
