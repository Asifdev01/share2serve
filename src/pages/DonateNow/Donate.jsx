import React, { useState } from "react";
import { Container, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel, Grid2 as Grid, Card, CardContent } from "@mui/material";

const Donate = () => {
  const [donationType, setDonationType] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5, justifyContent: "center",alignItems: "center" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Donate Now
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Your donation can help feed those in need. Choose how you want to contribute.
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid  size={{xs:12, sm:  6}}>
              <TextField fullWidth label="Full Name" variant="outlined" required />
            </Grid>
            <Grid size={{xs:12, sm:  6}}>
              <TextField fullWidth label="Email" type="email" variant="outlined" required />
            </Grid>
            <Grid sitem xs={12}>
              <TextField fullWidth label="Phone Number" type="tel" variant="outlined" required />
            </Grid>
            <Grid size={{xs:12, sm:  6}}>
              <FormControl fullWidth>
                <InputLabel>Donation Type</InputLabel>
                <Select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
                  <MenuItem value="food">Food Items</MenuItem>
                  <MenuItem value="money">Monetary Donation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {donationType === "food" && (
              <Grid ize={{xs:12, sm:  6}}>
                <FormControl fullWidth>
                  <InputLabel>Food Category</InputLabel>
                  <Select value={foodCategory} onChange={(e) => setFoodCategory(e.target.value)}>
                    <MenuItem value="perishable">Perishable</MenuItem>
                    <MenuItem value="non-perishable">Non-perishable</MenuItem>
                    <MenuItem value="cooked">Cooked</MenuItem>
                    <MenuItem value="packaged">Packaged</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
            {donationType === "food" && (
              <Grid item xs={12}>
                <TextField fullWidth label="Quantity & Expiry Date" variant="outlined" required />
              </Grid>
            )}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Submit Donation
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Donate;
