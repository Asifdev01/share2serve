import React from "react";
import { Container, Grid2 as Grid, TextField, Button, Box, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router";

const Signup = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh", display: "flex" }}>
      <Grid container sx={{ flex: 1 }}>
        {/* Left Side - Image */}
        <Grid
        size={{xs:12, md:6}}
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/food3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>

        {/* Right Side - Login Form */}
        <Grid
           size={{xs:12, md:6}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
          }}
        >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center" }}>
          <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center", mb: 11 }}>
          <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          mr: 2,
                          textAlign: "center",
                          mt:5,
                          justifyContent: "center",
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: "Kaushan Script, serif",
                          fontWeight: 500,
                          fontSize:' 3rem',
                          color: 'black',
                          textDecoration: 'none',
                          textUnderline: "line-through",
                        }}
                      >
                        Share2serve
              </Typography>
          </Box>
          <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
            
           
            <Typography variant="h4" gutterBottom>
              Create an account
            </Typography>

            <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center",borderRadius: "20px", }}>
                <TextField sx={{borderRadius: "20px"}} label="Full name" variant="outlined" fullWidth margin="normal" />
                <TextField label="Email" type="password" variant="outlined" fullWidth margin="normal" />
                <TextField label="Mobile number" variant="outlined" fullWidth margin="normal" />
                <Button variant="contained" fullWidth sx={{ mt: 2,bgcolor: "#87A920",padding: "10px 20px", }}>
                Sign up
                </Button>
            </Box>

               <Typography sx={{ mt: 2,fontFamily: "Albert Sans, sans-serif",fontSize:"0.8rem",opacity: "0.5"}}>or</Typography>
                <Typography sx={{fontFamily: "Albert Sans, sans-serif",fontSize:"0.8rem",opacity: "0.5"}}>Login with</Typography>

            <Box sx={{ mt: 5, display: "flex" , flexDirection:"row", justifyContent: "space-between"}}>
            <Button variant="outlined" sx={{borderRadius:" 20px",color: "black" ,borderColor: "#87A920",padding: "10px 40px"}}>
              <GoogleIcon />
            </Button>
            <Button variant="outlined"  sx={{borderRadius:" 20px",display: "flex",borderColor: "#87A920",color: "black",padding: "10px 40px"}}>
              <a href="https://www.apple.com/in/shop/buy-iphone/iphone-16-pro"> <AppleIcon /></a>
              
            </Button>
            </Box>

          </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
