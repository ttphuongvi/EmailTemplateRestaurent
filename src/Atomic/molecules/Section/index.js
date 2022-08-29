import React from "react";
import Stack from "../../atoms/Stack";
import Typography from "../../atoms/Typography";
import PropTypes from "prop-types";

const Section = ({ caption, title, content }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      {caption}

      {title}

      {content}
    </Stack>
  );
};

Section.prototype = {
  caption: PropTypes.node,
  title: PropTypes.node,
  content: PropTypes.node,
};

export default Section;
