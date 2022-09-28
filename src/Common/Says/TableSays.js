import React from "react";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import { PropTypes } from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";
import AtomContent from "../../Atomic/atoms/Text/AtomContent";
import Button from "../../Atomic/atoms/Button";

const TableSays = ({ image, name, job, content }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td align="center">
          <img
            alt=""
            src={image}
            width="100px"
            style={{
              borderRadius: "50%",
              marginBottom: theme.spacing(2),
            }}
          ></img>
        </td>
      </tr>
      <tr>
        <td align="center">
          <h3 style={{ margin: 0, lineHeight: 1.8 }}>{name}</h3>
          <span
            style={{
              color: alpha(theme.palette.common.black, 0.3),
            }}
          >
            {job}
          </span>
          <AtomContent>{content}</AtomContent>
          <Button>Read more</Button>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableSays.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  content: PropTypes.string,
};

export default TableSays;
