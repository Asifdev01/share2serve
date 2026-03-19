import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Request = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Donation Requests</Typography>
      <Paper sx={{ p: 4 }}>
        <Typography variant="body1">This page will manage requests from charities and individuals in need.</Typography>
      </Paper>
    </Box>
  );
};

export default Request;
