import React from "react";
import PropTypes from "prop-types";

const TableSynthetic = ({ children, style }) => {
  return (
    <table
      style={{ ...style }}
      cellPadding={0}
      cellSpacing={0}
      border={0}
      width="100%"
    >
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableSynthetic;

TableSynthetic.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
