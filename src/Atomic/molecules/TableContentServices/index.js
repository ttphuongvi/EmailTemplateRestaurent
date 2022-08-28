import React from "react";
import Table from "../../atoms/Table";
import TableBody from "../../atoms/TableBody";
import TableCell from "../../atoms/TableCell";
import TableCellNoneBorderBottom from "../../molecules/TableCellNoneBorderBottom";
import Typography from "../../atoms/Typography";
import TableRow from "../../atoms/TableRow";
import Box from "../../atoms/Box";
import PropTypes from "prop-types";
import Stack from "../../atoms/Stack";
import TypographyLightContent from "../TypographyLightContent";

const TableContentServices = ({ image, subTitle, content }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCellNoneBorderBottom align="center" padding="none">
            <Box
              alt=""
              component="img"
              src={image}
              sx={{ width: "60px", maxWidth: "60px" }}
            ></Box>
          </TableCellNoneBorderBottom>
        </TableRow>
        <TableRow>
          <TableCellNoneBorderBottom align="center" padding="none">
            <Stack spacing={1}>
              <Typography variant="subTitle">{subTitle}</Typography>
              <TypographyLightContent>{content}</TypographyLightContent>
            </Stack>
          </TableCellNoneBorderBottom>
        </TableRow>
      </TableBody>
    </Table>
  );
};

TableContentServices.prototype = {
  image: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default TableContentServices;
