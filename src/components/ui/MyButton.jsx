import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ theme }) => ({
  fontFamily: "Albert Sans",
  marginTop:"40px",
  marginRight:"20px",
  fontSize: "30px",
  color: "#ffffff",
  fontWeight: 300,
  borderRadius: "5px",
  backgroundColor: "#b1dd2b",
  width: "307px",width: "307px",
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
  return <MyButton sx={{...sx}}>{children}</MyButton>;
};

export default ResponsiveButton;
