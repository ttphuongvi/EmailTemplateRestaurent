import React from "react";
import PropTypes from "prop-types";
import TableSynthetic from "../molecules/TableSynthetic";

const TemplateEmail = ({ content }) => {
  return (
    <TableSynthetic
      style={{
        maxWidth: "600px",
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
