import React from "react";

const TableSynthetic = (props) => {
  return (
    <table>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default TableSynthetic;
