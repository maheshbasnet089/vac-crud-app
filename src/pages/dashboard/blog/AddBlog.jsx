// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

export default function AddBlog() {
  const [formData, setFormData] = React.useState({
    title: "",
    image: "",
    description: "",
  });

  const [adding, setAdding] = React.useState(false);
  const addBlog = async (e) => {
    setAdding(true);

    e.preventDefault();
    console.log(formData);
    var response = await axios.post(
      "https://63f129a95703e063fa53bd15.mockapi.io/Blog",
      formData
    );
    console.log(formData);
    alert("Blog created successfully");
    console.log(response);
    setAdding(false);
    setFormData({
      title: "",
      image: "",
      description: "",
    });
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
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Typography>Image</Typography>
      <TextField
        value={formData.image}
        label="Please enter image url"
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        type="url"
        name="image"
      />
      <TextField
        label="Description"
        rows={4}
        multiline
        name="description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <Button
        disabled={adding ? true : false}
        type="submit"
        variant="contained"
      >
        {adding ? <CircularProgress size={25} /> : "Add"}
      </Button>
    </Box>
  );
}
