import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const AtomTitle = ({ children, dark }) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.subtitle1.fontFamily,
        color:
          dark === true
            ? theme.palette.common.white
            : theme.palette.common.black,
      }}
    >
      {children}
    </h2>
  );
};

export default AtomTitle;

AtomTitle.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
