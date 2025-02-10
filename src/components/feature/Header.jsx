import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import { Link } from 'react-router';

const pages = [{
  label:'Admin ',
  link: '/admin'
},
{
  label:'Food Donors ',
  link: '/fooddonors'
}, 
{
  label:'Charities ',
  link: '/charities'
}, 
{
  label:'Volentiers ',
  link: '/volentiers'
},
{
  label:'About us ',
  link: '/aboutus'
},
];

const settings = ['Profile', 'Account','Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#FFEDFA'}}>
      <Container maxWidth="xl">
        <Toolbar regular>
          {/* Logo for desktop */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: 'black' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "Kaushan Script, serif",
              fontWeight: 500,
              fontSize:' 2.5rem',
              ml: 5,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Share2serve
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color: 'black' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* {
                label:'About us ',
                link: '/aboutus'
              }, */}
              {pages.map((item) => (
                <MenuItem key={item.label} onClick={handleCloseNavMenu}>
                  <Link to={item.link}>
                  <Typography textAlign="center">{item.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none', color: 'black' }, mr: 1 }} />
          <Typography
            variant="h5"
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { md: 'none' },
              flexGrow: 1,
              fontFamily: "Kaushan Script, serif",
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Share2serve
          </Typography>

          {/* Pages for desktop */}
          <Box sx={{ flexGrow: 1, display: {
             xs: 'none', md: 'flex', display: 'flex', justifyContent: 'right', alignItems: 'right', 
           } }}>
            {pages.map((item) => (
              <Link to={item.link}>
              <Button key={item.label} onClick={handleCloseNavMenu} 
              sx={{ my: 2, color: 'black', display: 'flex',float: 'right',mr:7,
                '&:hover': {
                  backgroundColor: '#B1DD2B', 
                },
              }}> 
                {item.label}
                
              </Button></Link>
            ))}
          </Box>

          {/* User settings */}
          <Box sx={{ flexGrow: 0 , ml: 4}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: '45px' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;