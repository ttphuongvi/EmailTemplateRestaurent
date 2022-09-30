import React from "react";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const Caption = ({ dark, children }) => {
  const theme = useTheme();
  return (
    <span
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: theme.typography.body2.fontSize,
        letterSpacing: theme.spacing(0.4),
        textTransform: "uppercase",
        paddingBottom: theme.spacing(1.5),
        borderBottom: `${theme.spacing(0.375)} solid ${
          theme.palette.primary.main
        }`,
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
