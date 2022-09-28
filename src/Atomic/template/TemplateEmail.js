import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../molecules/TableSynthetic";
import { useTheme } from "@mui/material/styles";

const TemplateEmail = ({ content }) => {
  const theme = useTheme();
  return (
    <TableSynthetic
      style={{
        maxWidth: theme.spacing(75),
        margin: "0 auto",
      }}
    >
      {content.map((item, index) => {
        const key = index;
        return <tr key={key}>{item}</tr>;
      })}
    </TableSynthetic>
  );
};

TemplateEmail.propTypes = {
  content: PropTypes.array,
};

export default TemplateEmail;
