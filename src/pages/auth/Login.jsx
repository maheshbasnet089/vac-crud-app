// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const user = {
    email: "test@gmail.com",
    password: "password",
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.email === user.email && formData.password === user.password) {
      window.location.replace("/admin");
    } else {
      alert("Invalid Credentials!!");
    }
  };

  return (
    <Container>
      <Box
        onSubmit={(e) => login(e)}
        component="form"
        noValidate
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 10,
        }}
      >
        <Typography variant="h3">Login</Typography>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <TextField
          label="Enter your password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
