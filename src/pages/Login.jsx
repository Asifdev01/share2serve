import React from "react";
import { Container, Grid, TextField, Button, Box, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh", display: "flex" }}>
      <Grid container sx={{ flex: 1 }}>
        {/* Left Side - Image */}
        <Grid
          item
          xs={12}
          md={6}
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
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
          }}
        >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center", mb: 11 }}>
          <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/Home"
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
              Login
            </Typography>
            <TextField sx={{ mt: 2 }} label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password"  fullWidth margin="normal" />
            <Box>
              <Typography sx={{cursor: "pointer",fontSize:"0.8rem",fontFamily: "Albert Sans, sans-serif",display: "flex", justifyContent: "flex-end",textDecoration: "none"  }}>
               forgot password?
              </Typography>
            </Box>
            
            <Box sx={{mt: 5}}>
              <Typography variant="body3" sx={{ mt: 2,fontFamily: "Albert Sans, sans-serif", }}>
                Don't have an account? 
                {/* <a href="#">Sign up</a> */}
                <Link style={{textDecoration: "none", marginLeft: '5px'}} to="/signup">Sign up</Link>
              </Typography>
            </Box>
            <Button variant="contained" fullWidth sx={{ mt: 2,bgcolor: "#87A920",padding: "10px 20px", }}>
              Login
            </Button>
            <Typography sx={{ mt: 2,fontFamily: "Albert Sans, sans-serif",fontSize:"0.8rem",opacity: "0.5"}}>or</Typography>
            <Typography sx={{fontFamily: "Albert Sans, sans-serif",fontSize:"0.8rem",opacity: "0.5"}}>Login with</Typography>

            <Box sx={{ mt: 5, display: "flex" , flexDirection:"row", justifyContent: "space-between"}}>
            <Button variant="outlined" sx={{borderRadius:" 20px",color: "black" ,borderColor: "#87A920",padding: "10px 40px"}}>
              <GoogleIcon />
            </Button>
            <Button variant="outlined"  sx={{borderRadius:" 20px",display: "flex",borderColor: "#87A920",color: "black",padding: "10px 40px"}}>
              <a href="https://www.apple.com/in/shop/buy-iphone/iphone-16-pro"> <FacebookIcon /></a>
              
            </Button>
            </Box>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
