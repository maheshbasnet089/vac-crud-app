import { Person } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Singleblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const getSingleBlog = async () => {
    var response = await axios.get(
      `https://63f129a95703e063fa53bd15.mockapi.io/Blog/${id}`
    );
    console.log(response.data);
    if (response.data !== null) {
      setBlog(response.data);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <>
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
        <Box sx={{ p: 3 }}>
          {/* image starts */}
          <img
            src={blog.image}
            style={{ width: "100%", objectFit: "cover", height: "450px" }}
          />
          {/* image end */}

          <Box>
            {/* author start */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Person />
              <h4>{blog.title}</h4>
            </Box>
            {/* author end */}
            <hr />

            {/* description starts  */}
            <p>{blog.description}</p>
            {/* description end  */}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Singleblog;
