import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const AtomSubTitle = ({ children, dark }) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontSize: theme.typography.subtitle2.fontSize,
        fontFamily: theme.typography.subtitle2.fontFamily,
        color: theme.palette.common.black,
        marginTop: 0,
      }}
    >
      {children}
    </h2>
  );
};

export default AtomSubTitle;

AtomSubTitle.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};
