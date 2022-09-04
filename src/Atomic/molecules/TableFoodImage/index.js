import React from "react";
import TableSynthetic from "../TableSynthetic";
import { PropTypes } from "prop-types";

const TableFoodImage = ({ image }) => {
  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{ borderSpacing: 0 }}
    >
      <tbody>
        <tr>
          <td>
            <img
              style={{ width: "100%", display: "block" }}
              alt=""
              src={image}
            ></img>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TableFoodImage.propTypes = {
  image: PropTypes.node,
};

export default TableFoodImage;
