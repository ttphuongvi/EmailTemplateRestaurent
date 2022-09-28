import React from "react";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const AtomContent = ({ dark, children }) => {
  const theme = useTheme();
  return (
    <p
      style={{
        fontFamily: theme.typography.body1.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
        color:
          dark === true
            ? alpha(theme.palette.common.white, 0.8)
            : alpha(theme.palette.common.black, 0.4),
      }}
    >
      {children}
    </p>
  );
};

export default AtomContent;

AtomContent.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
