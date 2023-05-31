// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function AddBlog() {
  // const [image, setImage] = React.useState(null);
  // const [title,setTitle] = React.useState("");
  // const [description,setDescription] = React.useState("");

  const [formData, setFormData] = React.useState({
    title: "",
    image: "",
    description: "",
  });
  const addBlog = async (e) => {
    e.preventDefault();

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
      <TextField
        label="Title"
        name="title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Typography>Image</Typography>
      <TextField
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        type="url"
        name="image"
      />
      <TextField
        label="Description"
        rows={4}
        multiline
        name="description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
}
