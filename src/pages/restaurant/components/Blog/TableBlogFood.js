import React from "react";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import { alpha, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import AtomSubTitle from "../../../../Atomic/atoms/Text/AtomSubTitle";
import AtomContent from "../../../../Atomic/atoms/Text/AtomContent";
import Button from "../../../../Atomic/atoms/Button";

const TableBlogFood = ({ image, dateSubmitted, subTitle, content }) => {
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
              fontSize: theme.spacing(1.75),
              fontFamily: "'Montserrat', sans-serif",
              color: alpha(theme.palette.common.black, 0.4),
            }}
          >
            {dateSubmitted}
          </p>
          <AtomSubTitle>{subTitle}</AtomSubTitle>
          <AtomContent>{content}</AtomContent>
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
  dateSubmitted: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default TableBlogFood;
