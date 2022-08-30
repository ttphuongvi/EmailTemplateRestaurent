import React from "react";
import Table from "../../atoms/Table";
import TableBody from "../../atoms/TableBody";
import TableCellNoneBorderBottom from "../TableCellNoneBorderBottom";
import Typography from "../../atoms/Typography";
import TableRow from "../../atoms/TableRow";
import Box from "../../atoms/Box";
import PropTypes from "prop-types";
import Stack from "../../atoms/Stack";
import TypographyLightContent from "../TypographyLightContent";
import Image from "../../atoms/Image";

const TableContentServices = ({ image, subTitle, content }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCellNoneBorderBottom
            sx={(theme) => ({
              paddingTop: theme.spacing(3),
            })}
            align="center"
            padding="none"
          >
            <Image
              alt=""
              src={image}
              style={{ width: "60px", maxWidth: "60px" }}
            ></Image>
          </TableCellNoneBorderBottom>
        </TableRow>
        <TableRow>
          <TableCellNoneBorderBottom
            align="center"
            // padding="none"
          >
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
