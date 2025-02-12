import React, { useState } from "react";
import {Box,Typography,Grid2 as Grid,Card,CardContent,CardActions,Button,Select,MenuItem,FormControl,InputLabel, useMediaQuery,useTheme,
} from "@mui/material";
import AdminBox from "../../components/ui/AdminBox";

const initialPartners = [
  { id: 1, name: "Helping Hands", contact: "9876543210", address: "Delhi, India", email: "hLz7t@example.com" ,status: "Pending" },
  { id: 2, name: "Food for All", contact: "9123456789", address: "Mumbai, India", email: "abc7t@example.com" ,status: "Approved" },
  { id: 3, name: "Hungery baby", contact: "9234567890", address: "Bangalore, India", email: "xyz7t@example.com" ,status: "Pending" },
  { id: 4, name: "eat food", contact: "9876543210", address: "Delhi, India", email: "hLz7t@example.com" ,status: "Approved" },
  { id: 5, name: "noone hungry", contact: "9876543210", address: "Delhi, India", email: "hLz7t@example.com" ,status: "Pending" },

];

const PartnersList = () => {
  const [partners, setPartners] = useState(initialPartners);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleStatusChange = (id, status) => {
    setPartners(partners.map(partner => partner.id === id ? { ...partner, status } : partner));
  };

  return (
    <AdminBox>
    <Box p={3}>
      <Typography variant="h4" mb={5} textAlign="center">
        Partners List
      </Typography>
      <Grid container spacing={5}>
        {partners.map((partner) => (
          <Grid item xs={12} sm={6} md={4} key={partner.id}>
            <Card sx={{ boxShadow: 1, borderRadius: 3,padding: 3 }}>
              <CardContent sx={{ p: 2 ,mt: 1}}>
                <Typography sx={{mt: 1}} variant="h6" gutterBottom>
                  {partner.name}
                </Typography>
                <Typography sx={{mt: 1}} variant="body2" color="textSecondary">
                  Contact: {partner.contact}
                </Typography>
                <Typography sx={{mt: 1}} variant="body2" color="textSecondary">
                  Address: {partner.address}
                </Typography>
                <Typography sx={{mt: 1}} variant="body2" color="textSecondary">
                  Email: {partner.email}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  
                  <Select
                    value={partner.status}
                    onChange={(e) => handleStatusChange(partner.id, e.target.value)}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </AdminBox>
  );
};

export default PartnersList;
