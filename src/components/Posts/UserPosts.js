import Container from "@mui/material/Container";
import AddNewPostForm from "./postsComponents/AddNewPostForm";
import PostsContent from "./postsComponents/PostsContent";

function UserPosts() {
  return (
    <Container sx={{
      width: '700px',
      maxWidth: '100%',
      marginTop: 5,

    }}>
     
      <AddNewPostForm/>
     <PostsContent/>
    </Container>
  )
}

export default UserPosts;
