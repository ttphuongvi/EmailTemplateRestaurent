import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../../molecules/TableSynthetic";
import { useTheme } from "@mui/material/styles";
import HeadingSection from "../../molecules/HeadingSection";
import AtomCaption from "../../atoms/Text/AtomCaption";
import AtomContent from "../../atoms/Text/AtomContent";
import Button from "../../atoms/Button";

const TableFoodContent = ({ caption, title, content, action }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td style={{ padding: theme.spacing(4) }}>
          <AtomCaption>{caption}</AtomCaption>
          <h2
            style={{
              marginTop: theme.spacing(3),
            }}
          >
            {title}
          </h2>
          <AtomContent>{content}</AtomContent>
          <Button>{action}</Button>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableFoodContent.propTypes = {
  caption: PropTypes.node,
  title: PropTypes.node,
  content: PropTypes.node,
  action: PropTypes.node,
};
export default TableFoodContent;
