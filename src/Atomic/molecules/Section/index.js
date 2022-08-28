import React from "react";
import Stack from "../../atoms/Stack";
import Typography from "../../atoms/Typography";
import PropTypes from "prop-types";
import Box from "../../atoms/Box";

const Section = ({ caption, subtitle, content }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1} padding={5}>
      {caption}

      {subtitle}

      {content}
    </Stack>
  );
};

Section.prototype = {
  caption: PropTypes.node,
  subtitle: PropTypes.node,
  content: PropTypes.node,
};

export default Section;
