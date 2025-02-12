import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminBox from "../../components/ui/AdminBox";

const initialDonors = [
  { id: 1, name: "John Doe", food: "Rice", quantity: "10 kg", date: "2024-02-10", status: "Pending" },
  { id: 2, name: "Jane Smith", food: "Vegetables", quantity: "5 kg", date: "2024-02-11", status: "Approved" },
  { id: 3, name: "John Doe", food: "Rice", quantity: "10 kg", date: "2024-02-10", status: "Pending" },
  { id: 4, name: "Jane Smith", food: "Vegetables", quantity: "5 kg", date: "2024-02-11", status: "Approved" },
];

const FoodDoner = () => {
  const [donors, setDonors] = useState(initialDonors);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleStatusChange = (id, status) => {
    setDonors(donors.map(donor => donor.id === id ? { ...donor, status } : donor));
  };

  return (
    <AdminBox>
    <Box p={isMobile ? 2 : 3}>
      <Typography variant="h4" mb={2} textAlign={isMobile ? "center" : "left"}>Food Donors</Typography>
      <TableContainer component={Paper} sx={{ mt: 2, overflowX: "auto" }}>
        <Table size={isMobile ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Food Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors.map(donor => (
              <TableRow key={donor.id}>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.food}</TableCell>
                <TableCell>{donor.quantity}</TableCell>
                <TableCell>{donor.date}</TableCell>
                <TableCell>
                  <FormControl size="small">
                    <Select
                      value={donor.status}
                      onChange={(e) => handleStatusChange(donor.id, e.target.value)}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Approved">Approved</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </AdminBox>
  );
};

export default FoodDoner;
