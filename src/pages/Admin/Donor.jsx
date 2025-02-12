import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
import AdminBox from "../../components/ui/AdminBox";

const donors = [
    { id: 1, name: "asif", email: "tat@example.com", phone: "123-456-7890", donations: 5, lastDonation: "2024-02-01",location:"Rourkela" },
    { id: 2, name: "ashutosh", email: "kiit@example.com", phone: "987-654-3210", donations: 13, lastDonation: "2024-01-15",location:"Bhubaneswar" },
    { id: 2, name: "sadasd", email: "silicon@example.com", phone: "987-654-3210", donations: 13, lastDonation: "2024-01-15",location:"Bhubaneswar" },
    { id: 2, name: "ashsh", email: "bitm@example.com", phone: "987-654-3210", donations: 31, lastDonation: "2024-01-15" ,location:"Bhubaneswar"},
    { id: 2, name: "svzx", email: "gita@example.com", phone: "987-654-3210", donations: 23, lastDonation: "2024-01-15" ,location:"falana"},
    { id: 2, name: "asdvvc", email: "cvraman@example.com", phone: "987-654-3210", donations: 5, lastDonation: "2024-01-15",location:"Bhubaneswar" },


];

const Donor = () => {
    return (
        <AdminBox >
        {/* <Box sx={{ padding: 2,ml:2 }}> */}
            <Typography variant="h4" gutterBottom align="center">
                Top Donors Management
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
                View and manage donors who contribute to food donations.
            </Typography>
            <TableContainer component={Paper} sx={{ overflowX: "auto", maxWidth: "100%" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Donations</TableCell>
                            <TableCell>Last Donation</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell sx={{ml:2}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donors.map((donor) => (
                            <TableRow key={donor.id}>
                                <TableCell>{donor.name}</TableCell>
                                <TableCell>{donor.email}</TableCell>
                                <TableCell>{donor.phone}</TableCell>
                                <TableCell>{donor.donations}</TableCell>
                                <TableCell>{donor.lastDonation}</TableCell>
                                <TableCell>{donor.location}</TableCell>

                                <TableCell>
                                    <Button variant="contained" color="primary">View PDF</Button>
                                    <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        {/* </Box> */}
        </AdminBox>
    );
};

export default Donor;
