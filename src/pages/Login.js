import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} component={Paper} elevation={3} p={4}>
        <Typography variant="h5" align="center">Login</Typography>
        <TextField fullWidth label="Username" variant="outlined" margin="normal"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Typography color="error" align="center">{error}</Typography>}
        <Button fullWidth variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
