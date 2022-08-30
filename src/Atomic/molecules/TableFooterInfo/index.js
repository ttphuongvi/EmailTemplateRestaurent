import React from "react";
import TableSynthetic from "../TableSynthetic";
import { useTheme } from "@mui/material/styles";
import { PropTypes } from "prop-types";

const TableFooterInfo = ({ heading, content }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td align="left" style={{ paddingRight: theme.spacing(1) }}>
          <h3
            style={{
              color: theme.palette.common.white,
              fontSize: "20px",
              marginTop: 0,
            }}
          >
            {heading}
          </h3>
          {content}
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableFooterInfo.prototype = {
  heading: PropTypes.string,
  content: PropTypes.node,
};

export default TableFooterInfo;
