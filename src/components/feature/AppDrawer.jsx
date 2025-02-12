import { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton, CssBaseline, Box } from "@mui/material";
import { Dashboard, People, Settings, Notifications, Menu as MenuIcon } from "@mui/icons-material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { DRAWER_WIDTH } from "../../../constant/constant";
import { useNavigate } from "react-router";

const AppDrawer = ({HomeMenuItems}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Dashboard");
  // const [activeButton, setActiveButton] = useState("Donor");

  const navigate = useNavigate(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleButtonClick = (text, path) => {
    setActiveButton(text);
    navigate(path); 
  };

  const AdminMenuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "admin/dashboard" },
    { text: "Donors", icon: <People />, path: "admin/Donor" },
    { text: "Food Donated", icon: <VolunteerActivismIcon />, path: "admin/fooddonor" },
    { text: "Requests", icon: <PlaylistAddIcon />, path: "admin/request" },
    { text: "Partners", icon: <ApartmentIcon />, path: "admin/partnerlist" },
    { text: "Notifications", icon: <Notifications />, path: "/notifications" },
    { text: "Settings", icon: <Settings />, path: "/settings" }
  ];
const menuItems = HomeMenuItems || AdminMenuItems;
  const drawer = (
    <div>
      {HomeMenuItems && (
         <Toolbar>
         <Typography variant="title"  sx={{ textDecoration: "none"}}>
          <a href="/admin/dashboard"> Share2serve</a>
         </Typography>
       </Toolbar>
      )}
     
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItemButton
            key={text}
            selected={activeButton === text}
            onClick={() => handleButtonClick(text, path)}
            sx={{
              // mb: 0.5,
              "&.Mui-selected": {
                backgroundColor: "#87A920",
                color: "#fff",
                "& .MuiListItemIcon-root": { color: "#fff" }
              }
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <>

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="default"
        elevation={0}
        position="fixed"
        sx={{ width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }, ml: { sm: `${DRAWER_WIDTH}px` } }}
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
            {activeButton}
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
        sx={{ display: { xs: "none", sm: "block" }, width: DRAWER_WIDTH, flexShrink: 0 }}
      >
        {drawer}
      </Drawer>
    </Box>

    </>
  );
}

export default AppDrawer;
