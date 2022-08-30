import React from "react";
import PropTypes from "prop-types";

const HeadingSection = ({ caption, title, content }) => {
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

export default HeadingSection;
