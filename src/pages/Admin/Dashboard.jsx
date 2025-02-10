import { Box, Card, CardContent, Grid as Grid2, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function AdminDashboard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Food Donated</Typography>
              <Typography variant="h4">500 KG</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">People Served</Typography>
              <Typography variant="h4">1200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Donors</Typography>
              <Typography variant="h4">85</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Donor Name</TableCell>
              <TableCell>Food Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Asif Ansari</TableCell>
              <TableCell>Rice</TableCell>
              <TableCell>10 KG</TableCell>
              <TableCell>10 Feb 2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Asutosh pathy</TableCell>
              <TableCell>Bread</TableCell>
              <TableCell>50 Loaves</TableCell>
              <TableCell>09 Feb 2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Subhasmita bal</TableCell>
              <TableCell>Bread</TableCell>
              <TableCell>50 Loaves</TableCell>
              <TableCell>09 Feb 2025</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
