import React from "react";
import PropTypes from "prop-types";

const Section = ({ caption, title, content }) => {
  return (
    <div align="center">
      {caption}

      {title}

      {content}
    </div>
  );
};

Section.prototype = {
  caption: PropTypes.node,
  title: PropTypes.node,
  content: PropTypes.node,
};

export default Section;
