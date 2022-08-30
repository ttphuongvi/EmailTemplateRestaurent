import React from "react";
import TableSynthetic from "../TableSynthetic";
import { PropTypes } from "prop-types";

const TableFoodImage = ({ image }) => {
  return (
    <TableSynthetic>
      <tr>
        <td>
          <img style={{ width: "100%" }} alt="" src={image}></img>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableFoodImage.propTypes = {
  image: PropTypes.node,
};

export default TableFoodImage;
