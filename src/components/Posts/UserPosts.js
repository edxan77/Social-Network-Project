import Container from "@mui/material/Container";
import { Provider } from "react-redux";
import store from "../../store";
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
      <Provider store={store}>
     <PostsContent/>
     </Provider>
    </Container>
  )
}

export default UserPosts;
