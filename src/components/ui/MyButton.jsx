import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router";
// import Donate from "./pages/DonateNow/Donate";

const MyButton = styled(Button)(({ theme }) => ({
  marginTop:"40px",
  marginRight:"20px",
  fontSize: "30px",
  color: "#ffffff",
  fontWeight: 300,
  borderRadius: "5px",
  backgroundColor: "#87A920",
  width: "307px",
  fontFamily: "Albert Sans, sans-serif",
  height: "77px",
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#9fc824", // Slightly darker shade for hover effect
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    width: "108px",
    height: "45px",
    borderRadius: "5px",
    marginTop:"15px",
  },
}));

const ResponsiveButton = ({ children,sx }) => {
  return  <MyButton LinkComponent={Link} to="/donate" sx={{...sx}}>{children}</MyButton>;
};

export default ResponsiveButton;
 