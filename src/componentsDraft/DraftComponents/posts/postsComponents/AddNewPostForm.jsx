/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { addPost} from 'Service/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { auth } from 'libPers/firebase';

function AddNewPostForm() {
  
  // const dispatch = useDispatch();
  
  // const posts = useSelector(function (state) {
  //   return state.post.posts;
  // });

  // console.log(posts)

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    
    // dispatch(addItem({ text: text }));

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
        width: 700,
        maxWidth: '100%',
        marginTop: 5,
      }}
    >
      <form onSubmit={onSubmit}>
        <FormControl
          sx={{
            width: '100%',
          }}
        >
          <TextField
            multiline
            rows={2}
            fullWidth
            label="Make Your Post"
            id="fullWidth"
            value={text}
            onChange={handleChange}
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            // onClick={onSubmit}
          >
            Post
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default AddNewPostForm;
