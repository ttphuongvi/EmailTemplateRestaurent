import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const AtomSubTitle = ({ children }) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontFamily: theme.typography.h6.fontFamily,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.text.primary,
        marginTop: 0,
      }}
    >
      {children}
    </h2>
  );
};

export default AtomSubTitle;

AtomSubTitle.propTypes = {
  children: PropTypes.node,
};
