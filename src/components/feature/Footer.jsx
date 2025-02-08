import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        // py: 2,
        // px: 3,
        // padding:"10px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
        mt:"20px"
        
      }}
    >
      <Typography variant="body2">© 2025 Share2serve Inc. all rights reserved</Typography>
    </Box>
  );
};

export default Footer;
