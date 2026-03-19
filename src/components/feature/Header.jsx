import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Container,
  Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const pages = [
  { label: 'Admin', link: '/admin/dashboard' },
  { label: 'Food Donors', link: '/admin/fooddonor' },
  { label: 'Charities', link: '/admin/partnerlist' },
  { label: 'About us', link: '/about' },
];

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#87A920', color: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar>
            {/* Mobile Menu Icon */}
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo - Desktop */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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

            {/* Logo - Mobile */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                variant="h5"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Kaushan Script, serif',
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Share2serve
              </Typography>
            </Box>

            {/* Desktop Nav Links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
              {pages.map((item) => (
                <Link key={item.label} to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                  <Button
                    sx={{
                      my: 2,
                      display: 'flex',
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

            {/* Auth Button */}
            <Box sx={{ flexGrow: 0, ml: 2 }}>
              {token ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: 'white', fontSize: '0.9rem', display: { xs: 'none', md: 'block' } }}>
                    Hi, {user?.name?.split(' ')[0]}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': { backgroundColor: '#B1DD2B', borderColor: '#B1DD2B' },
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': { backgroundColor: '#B1DD2B', borderColor: '#B1DD2B' },
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: 250, backgroundColor: '#87A920' } }}
      >
        <List>
          {pages.map((item) => (
            <ListItem
              button
              key={item.label}
              component={Link}
              to={item.link}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText primary={item.label} sx={{ color: 'white', textAlign: 'center' }} />
            </ListItem>
          ))}
          {/* Mobile auth action */}
          <ListItem
            button
            onClick={token ? handleLogout : () => { navigate('/login'); setOpenDrawer(false); }}
          >
            <ListItemText
              primary={token ? 'Logout' : 'Login'}
              sx={{ color: 'white', textAlign: 'center' }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;