import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../TableSynthetic";
import { useTheme } from "@mui/material/styles";
import SubTitleLight from "../SubTitleLight";
import ContentLight from "../ContentLight";

const TableContentServices = ({ image, subTitle, content }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td style={{ paddingTop: theme.spacing(3) }} align="center">
          <img
            alt=""
            src={image}
            style={{ width: "60px", maxWidth: "60px" }}
          ></img>
        </td>
      </tr>
      <tr>
        <td align="center">
          <SubTitleLight variant="subTitle">{subTitle}</SubTitleLight>
          <ContentLight>{content}</ContentLight>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableContentServices.prototype = {
  image: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default TableContentServices;
