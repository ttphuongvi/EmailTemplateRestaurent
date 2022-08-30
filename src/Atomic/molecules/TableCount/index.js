import React from "react";
import TableSynthetic from "../TableSynthetic";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const TableCount = ({ number, name }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td align="center">
          <span
            style={{
              display: "block",
              color: theme.palette.common.white,
              fontSize: "34px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
            }}
          >
            {number}
          </span>
          <span
            style={{
              display: "block",
              color: alpha(theme.palette.common.white, 0.9),
              fontSize: "13px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {name}
          </span>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableCount.prototype = {
  number: PropTypes.number,
  name: PropTypes.string,
};

export default TableCount;
