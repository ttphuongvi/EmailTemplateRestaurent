import React from "react";
import TableSynthetic from "../TableSynthetic";
import TableFoodContent from "../TableFoodContent";
import TableFoodImage from "../TableFoodImage";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const TableFoodImageLeft = ({ id, caption, image, title, content }) => {
  const theme = useTheme();
  return (
    <td id={id} style={{ backgroundColor: theme.palette.grey[50], padding: 0 }}>
      <TableSynthetic>
        <tr>
          <td valign="middle" width="50%">
            <TableFoodImage image={image} />
          </td>
          <td valign="middle" width="50%">
            <TableFoodContent
              caption={caption}
              title={title}
              content={content}
              action="Read more"
            />
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};

TableFoodImageLeft.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default TableFoodImageLeft;
