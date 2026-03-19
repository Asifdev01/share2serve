import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const FoodDonor = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Food Donations</Typography>
      <Paper sx={{ p: 4 }}>
        <Typography variant="body1">This page will list all food donations received from various donors.</Typography>
      </Paper>
    </Box>
  );
};

export default FoodDonor;
