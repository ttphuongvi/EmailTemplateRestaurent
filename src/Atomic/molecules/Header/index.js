import React from "react";
import Typography from "../../atoms/Typography";
import { styled } from "@mui/material/styles";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: " 'Montserrat', sans-serif",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "20px",
  padding: theme.spacing(2, 5),
}));

const Header = () => {
  return <StyledHeader>RESTOBAR</StyledHeader>;
};
export default Header;
