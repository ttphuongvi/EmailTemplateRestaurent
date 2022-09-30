import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import { useTheme } from "@mui/material/styles";
import AtomSubTitle from "../../../../Atomic/atoms/Text/AtomSubTitle";
import AtomContent from "../../../../Atomic/atoms/Text/AtomContent";

const TableContentServices = ({ image, subTitle, content }) => {
  const theme = useTheme();

  return (
    <TableSynthetic>
      <tr>
        <td align="center">
          <img width={theme.spacing(7.5)} alt={subTitle} src={image}></img>
        </td>
      </tr>
      <tr>
        <td align="center" style={{ paddingTop: theme.spacing(1) }}>
          <AtomSubTitle>{subTitle}</AtomSubTitle>
          <AtomContent>{content}</AtomContent>
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
