import React from "react";
import Typography from "../../atoms/Typography";
import { styled } from "@mui/material/styles";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: " 'Montserrat', sans-serif",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "20px"
}));

const Header = () => {
  return <StyledHeader>RESTOBAR</StyledHeader>;
};
export default Header;
