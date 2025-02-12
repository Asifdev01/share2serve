import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Avatar, Button, Tooltip, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
import { pages, settings } from '../../dto/headerDto';
import { Link } from 'react-router';

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#87A920', color: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar>
            {/* Mobile Menu Icon */}
            <IconButton size="large" color="inherit" onClick={() => setOpenDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon />
            </IconButton>

            {/* Logo for Desktop */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Kaushan Script, serif',
                fontWeight: 500,
                fontSize: '2.5rem',
                ml: 5,
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Share2serve
            </Typography>

            {/* Logo for Small Screens */}
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
              <Typography
                variant="h5"
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' }, // Show only on mobile
                  flexGrow: 1,
                  fontFamily: 'Kaushan Script, serif',
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  textAlign: 'center',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Share2serve
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', color: 'white' }}>
              {pages.map((item) => (
                <Link key={item.label} to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                  <Button
                    sx={{
                      my: 2,
                      display: 'flex',
                      float: 'right',
                      mr: 7,
                      color: 'white',
                      '&:hover': { backgroundColor: '#B1DD2B' },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* User settings
            <Box sx={{ flexGrow: 0, ml: 4, color: 'white' }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box> */}

          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{ '& .MuiDrawer-paper': { width: 250, backgroundColor: '#87A920' } }}>
        <List>
          {pages.map((item) => (
            <ListItem button key={item.label} component={Link} to={item.link} onClick={() => setOpenDrawer(false)}>
              <ListItemText primary={item.label} sx={{ color: 'white', textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
