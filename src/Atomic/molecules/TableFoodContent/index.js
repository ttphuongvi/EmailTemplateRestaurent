import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../TableSynthetic";
import { useTheme } from "@mui/material/styles";
import HeadingSection from "../HeadingSection";
import CaptionLight from "../CaptionLight";
import SubTitleLight from "../SubTitleLight";
import ContentLight from "../ContentLight";
import Button from "../Button";

const TableFoodContent = ({ caption, title, content, action }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td style={{ padding: theme.spacing(2, 4), textAlign: "left" }}>
          <HeadingSection
            caption={<CaptionLight>{caption}</CaptionLight>}
            title={
              <h2 style={{ fontSize: "22px", marginTop: theme.spacing(3) }}>
                {title}
              </h2>
            }
            content={
              <>
                <ContentLight>{content}</ContentLight>
                <Button>{action}</Button>
              </>
            }
          ></HeadingSection>
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
