import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
            <Typography variant="h6">Total Donors</Typography>
            <Typography variant="h3" color="#87A920">128</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
            <Typography variant="h6">Food Donations</Typography>
            <Typography variant="h3" color="#87A920">452 kg</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
            <Typography variant="h6">Active Requests</Typography>
            <Typography variant="h3" color="#87A920">15</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Recent Activity</Typography>
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="body2">• New donation from "Green Grocers" - 5 mins ago</Typography>
          <Typography variant="body2">• "Helping Hands" request approved - 20 mins ago</Typography>
          <Typography variant="body2">• New donor signed up: "City Bakery" - 1 hour ago</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
