import React from "react";
import Typography from "../../atoms/Typography";
import { styled } from "@mui/material/styles";
import TableCellStyles from "../TableCellTyles";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: " 'Montserrat', sans-serif",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "20px",
}));

const Header = () => {
  return (
    <TableCellStyles align="center">
      <StyledHeader>RESTOBAR</StyledHeader>
    </TableCellStyles>
  );
};
export default Header;
