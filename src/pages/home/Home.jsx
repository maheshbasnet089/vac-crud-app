import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // for navigation
  const navigate = useNavigate();

  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getBLogs = async () => {
    var response = await axios.get(
      "https://63f129a95703e063fa53bd15.mockapi.io/Blog"
    );
    setBlogs(response.data);
    setLoading(false);
  };

  console.log(blogs, "mah blog ho");

  React.useEffect(() => {
    getBLogs();
  }, []);
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Blogs
      </Typography>

      {loading === true ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30vh",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {blogs.map((blog) => {
            return (
              <Card key={blog.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={blog.image}
                  title={blog.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate(`/single-blog/${blog.id}`)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
