import Container from "@mui/material/Container";
import AddNewPostForm from "./PostsComponents/AddNewPostForm";
import Posts from "./PostsComponents/PostsContent";

function UserPosts() {
  return (
    <Container sx={{
      width: '700px',
      maxWidth: '100%',
      marginTop: 5,

    }}>
      <AddNewPostForm/>
      <Posts />
    </Container>
  )
}

export default UserPosts;
