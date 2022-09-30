import React from "react";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import SubTitleLight from "../../../../Atomic/atoms/Text/AtomSubTitle";
import AtomContent from "../../../../Atomic/atoms/Text/AtomContent";
import Button from "../../../../Atomic/atoms/Button";

const TableDeliciousFood = ({ image, subTitle, content }) => {
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
          <SubTitleLight>{subTitle}</SubTitleLight>
          <AtomContent>{content}</AtomContent>
          <p>
            <Button>Read more</Button>
          </p>
        </td>
      </tr>
    </TableSynthetic>
  );
};

TableDeliciousFood.propTypes = {
  image: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default TableDeliciousFood;
