import React from "react";
import TableSynthetic from "../../molecules/TableSynthetic";
import TableFoodContent from "./TableFoodContent";
import TableFoodImage from "./TableFoodImage";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const TableFood = ({ caption, image, title, content, id, reverse }) => {
  const theme = useTheme();

  return (
    <tr>
      <td
        style={{
          backgroundColor: theme.palette.grey[50],
        }}
        id={id}
      >
        <TableSynthetic>
          <tr
            style={{
              display: "flex",
              flexDirection: "row",
              flexDirection: reverse === true ? "row-reverse" : "row",
            }}
          >
            <td width="50%">
              <TableFoodContent
                caption={caption}
                title={title}
                content={content}
                action="Read more"
              />
            </td>
            <td width="50%">
              <TableFoodImage image={image} />
            </td>
          </tr>
        </TableSynthetic>
      </td>
    </tr>
  );
};
TableFood.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  reverse: PropTypes.bool,
};

export default TableFood;
