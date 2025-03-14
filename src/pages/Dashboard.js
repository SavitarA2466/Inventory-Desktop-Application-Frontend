import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ onLogout }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar onLogout={onLogout} />
      <Container>
        <Box mt={10} component={Paper} elevation={3} p={4} textAlign="center">
          <Typography variant="h4">Welcome to Dashboard</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
