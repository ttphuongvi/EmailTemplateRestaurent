import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const AtomTitle = ({ children, dark }) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: theme.spacing(3.5),
        fontWeight: 700,
        lineHeight: 1.4,
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
