import React from "react";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const TableCount = ({ number, name }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td align="center">
          <h1
            style={{
              display: "block",
              color: theme.palette.common.white,
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            {number}
          </h1>
          <span
            style={{
              display: "block",
              color: alpha(theme.palette.common.white, 0.9),
              fontSize: theme.spacing(1.625),
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
