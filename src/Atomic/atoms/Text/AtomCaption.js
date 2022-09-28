import React from "react";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const Caption = ({ dark, children }) => {
  const theme = useTheme();
  return (
    <span
      style={{
        fontFamily: theme.typography.caption.fontFamily,
        fontSize: theme.typography.caption.fontSize,
        letterSpacing: theme.typography.caption.letterSpacing,
        textTransform: theme.typography.caption.textTransform,
        paddingBottom: theme.typography.caption.paddingBottom,
        borderBottom: theme.typography.caption.borderBottom,
        color:
          dark === true
            ? alpha(theme.palette.common.white, 0.4)
            : alpha(theme.palette.common.black, 0.4),
      }}
    >
      {children}
    </span>
  );
};

export default Caption;

Caption.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
