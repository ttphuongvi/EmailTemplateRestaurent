import React from "react";
import PropTypes from "prop-types";
import { alpha, useTheme } from "@mui/material/styles";

const Caption = ({ dark, children }) => {
  const theme = useTheme();
  return (
    <span
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.body2.fontSize,
        letterSpacing: theme.spacing(0.5),
        textTransform: "uppercase",
        paddingBottom: theme.spacing(1),
        borderBottom: `${theme.spacing(0.3)} solid ${
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
