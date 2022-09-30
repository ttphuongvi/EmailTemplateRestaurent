import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const AtomTitle = ({ children, dark }) => {
  const theme = useTheme();
  return (
    <h1
      style={{
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.4,
        color:
          dark === true
            ? theme.palette.common.white
            : theme.palette.common.black,
      }}
    >
      {children}
    </h1>
  );
};

export default AtomTitle;

AtomTitle.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
