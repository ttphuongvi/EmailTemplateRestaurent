import React from "react";
import TableSynthetic from "../TableSynthetic";
import { alpha, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import SubTitleLight from "../SubTitleLight";
import ContentLight from "../ContentLight";
import Button from "../Button";

const TableBlogFood = ({ image, meta, subTitle, content }) => {
  const theme = useTheme();
  return (
    <TableSynthetic>
      <tr>
        <td style={{ padding: theme.spacing(0, 1) }}>
          <img alt="" src={image} style={{ width: "100%" }}></img>
        </td>
      </tr>
      <tr>
        <td style={{ padding: theme.spacing(1, 1, 0) }}>
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              color: alpha(theme.palette.common.black, 0.4),
            }}
          >
            {meta}
          </p>
          <SubTitleLight>{subTitle}</SubTitleLight>
          <ContentLight>{content}</ContentLight>
          <p>
            <Button>Read more</Button>
          </p>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableBlogFood.propTypes = {
  image: PropTypes.string,
  meta: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default TableBlogFood;
