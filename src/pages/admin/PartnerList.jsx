import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const PartnerList = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Partner List</Typography>
      <Paper sx={{ p: 4 }}>
        <Typography variant="body1">This page will list all corporate and NGO partners.</Typography>
      </Paper>
    </Box>
  );
};

export default PartnerList;
