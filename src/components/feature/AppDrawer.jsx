import { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton, CssBaseline, Box } from "@mui/material";
import { Dashboard, People, Settings, Notifications, Menu as MenuIcon } from "@mui/icons-material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';

const drawerWidth = 240;

export default function AdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
    <style>
      color: #87A920;
    </style>
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Kaushan Script, serif",
            fontSize: "1.5rem",
          }}
        >
          Share2serve
        </Typography>
      </Toolbar>
      <List>
        {["Dashboard", "Donors", "Food Donated", "Requests", "Partners", "Notifications", "Settings"].map((text, index) => (
          <ListItemButton
            key={text}
            selected={activeButton === text}
            onClick={() => handleButtonClick(text)}
            
          >
            <ListItemIcon>
              {index === 0 ? <Dashboard color="#87A920" />
                : index === 1 ? <People />
                : index === 2 ? <VolunteerActivismIcon />
                : index === 3 ? <PlaylistAddIcon />
                : index === 4 ? <ApartmentIcon />
                : index === 5 ? <Notifications />
                : <Settings />
              }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="default"
        elevation={0}
        position="fixed"
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" mt={1} gutterBottom>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{ display: { xs: "none", sm: "block" }, width: drawerWidth, flexShrink: 0 }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
