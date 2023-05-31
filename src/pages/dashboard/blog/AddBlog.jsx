// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function AddBlog() {
  const [image, setImage] = React.useState(null);

  const addBlog = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // a
    const formData = new FormData();
    formData.append("title", data.get("title"));
    formData.append("image", image);
    formData.append("description", data.get("description"));

    var response = await axios.post(
      "https://63f129a95703e063fa53bd15.mockapi.io/Blog",
      formData
    );
    console.log(formData);
    alert("Blog created successfully");
    console.log(response);
  };

  return (
    <Box
      onSubmit={(e) => addBlog(e)}
      component="form"
      encType="multipart/form-data"
      noValidate
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField label="Title" name="title" />
      <Typography>Image</Typography>
      <TextField
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        name="image"
      />
      <TextField label="Description" rows={4} multiline name="description" />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
}
