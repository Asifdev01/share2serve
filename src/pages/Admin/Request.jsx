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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import AdminBox from "../../components/ui/AdminBox";

const initialRequest = [
  { id: 1, name: "NGO A", food: "Rice", quantity: "50 kg", date: "2024-02-12", status: "Pending", contact: "1234567890" },
  { id: 2, name: "Community Center", food: "Vegetables", quantity: "20 kg", date: "2024-02-11", status: "Approved", contact: "9876543210" },
  { id: 3, name: "NGO B", food: "Rice", quantity: "30 kg", date: "2024-02-10", status: "Pending", contact: "1234567890" },
  { id: 4, name: "Community Center", food: "Vegetables", quantity: "15 kg", date: "2024-02-09", status: "Approved", contact: "9876543210" },
  { id: 5, name: "NGO C", food: "Rice", quantity: "40 kg", date: "2024-02-08", status: "Pending", contact: "1234567890" },
];

const Request = () => {
  const [Request, setRequest] = useState(initialRequest);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleStatusChange = (id, status) => {
    setRequest(Request.map(req => req.id === id ? { ...req, status } : req));
  };

  const handleOpen = (request) => {
    setSelectedRequest(request);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRequest(null);
  };

  return (
    <AdminBox>
    <Box p={isMobile ? 2 : 3} sx={{ flexDirection: "column",overflowX: "auto" , overflowY: "auto", display: "flex",alignItems: "center",mt:7,justifyContent: "center"}}>
      <Typography variant="h4" mb={2} textAlign={isMobile ? "center" : "center"}>Food Request</Typography>
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table size={isMobile ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Food Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Request.map(req => (
              <TableRow key={req.id}>
                <TableCell>{req.name}</TableCell>
                <TableCell>{req.food}</TableCell>
                <TableCell>{req.quantity}</TableCell>
                <TableCell>{req.date}</TableCell>
                <TableCell>
                  <FormControl size="small">
                    <Select
                      value={req.status}
                      onChange={(e) => handleStatusChange(req.id, e.target.value)}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Approved">Approved</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button size="small" onClick={() => handleOpen(req)}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Dialog for request details */}
      <Dialog open={open} onClose={handleClose} fullScreen={isMobile}>
        <DialogTitle>Request Details</DialogTitle>
        <DialogContent>
          {selectedRequest && (
            <Box>
              <Typography><strong>Name:</strong> {selectedRequest.name}</Typography>
              <Typography><strong>Food Item:</strong> {selectedRequest.food}</Typography>
              <Typography><strong>Quantity:</strong> {selectedRequest.quantity}</Typography>
              <Typography><strong>Date:</strong> {selectedRequest.date}</Typography>
              <Typography><strong>Contact:</strong> {selectedRequest.contact}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </AdminBox>
  );
};

export default Request;
