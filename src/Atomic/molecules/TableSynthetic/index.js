import React from "react";
import Table from "../../atoms/Table";
import TableBody from "../../atoms/TableBody";

const TableSynthetic = (props) => {
  return (
    <Table>
      <TableBody>{props.children}</TableBody>
    </Table>
  );
};

export default TableSynthetic;
