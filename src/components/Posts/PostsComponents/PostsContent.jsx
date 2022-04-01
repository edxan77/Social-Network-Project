import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { blue, lightGreen } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Posts() {
  const posts = useSelector(function (state) {
    return state.post.items;
  });

  return (
    <>
      {posts?.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "700",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 500,
              marginTop: 6,
              borderRadius: 8,
              bgcolor: lightGreen["50"],
            }}
          >
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: blue[600],
                  width: 85,
                  height: 85,
                }}
              >
                {"Photo"}
              </Avatar>

              <Typography gutterBottom variant="h5" sx={{ width: "50%" }}>
                Name Surname
              </Typography>
            </CardActions>

            <CardMedia
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 500,
                minHeight: 300,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 5,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.text}
                </Typography>
              </CardContent>
            </CardMedia>
            <CardActions>
              <Button variant="contained" endIcon={<ShareIcon />}></Button>
              <Button
                variant="contained"
                endIcon={<ReadMoreOutlinedIcon />}
              ></Button>
              <Button variant="contained" endIcon={<ThumbUpIcon />}></Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}
