import React from "react";
import TableSynthetic from "../TableSynthetic";
import TableFoodContent from "../TableFoodContent";
import TableFoodImage from "../TableFoodImage";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const TableFoodImageRight = ({ caption, image, title, content }) => {
  const theme = useTheme();
  return (
    <td style={{ backgroundColor: theme.palette.grey[50] }}>
      <TableSynthetic>
        <tr>
          <td style={{ width: "50%" }}>
            <TableFoodContent
              caption={caption}
              title={title}
              content={content}
              action="Read more"
            />
          </td>
          <td style={{ width: "50%" }}>
            <TableFoodImage image={image} />
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};
TableFoodImageRight.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default TableFoodImageRight;
