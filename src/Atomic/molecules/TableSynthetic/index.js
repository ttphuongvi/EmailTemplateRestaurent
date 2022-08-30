import React from "react";

const TableSynthetic = (props) => {
  return (
    <table cellPadding={0} cellSpacing={0} border={0} width="100%">
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default TableSynthetic;
