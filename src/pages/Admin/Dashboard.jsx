import { Box, Card, CardContent, Grid2 as Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { DRAWER_WIDTH } from "../../../constant/constant";
import AdminBox from "../../components/ui/AdminBox";

const Dashboard = () => {

  return (
<AdminBox >
      <Grid container spacing={3}>
        <Grid size={{xs:12, sm:  4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Food Donated</Typography>
              <Typography variant="h5">500 KG</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:  4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">People Served</Typography>
              <Typography variant="h5">1200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:  4}}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Donors</Typography>
              <Typography variant="h5">85</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Recent Donations
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 5, mt:4 }}>
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
      </AdminBox>
  );
}

export default Dashboard;