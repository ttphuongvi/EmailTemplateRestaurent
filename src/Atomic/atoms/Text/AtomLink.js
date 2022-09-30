import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const AtomLink = ({ children, dark, href, style }) => {
  const theme = useTheme();
  return (
    <a
      style={{
        color: dark ? theme.palette.common.white : theme.palette.common.black,
        textDecoration: "none",
        ...style,
      }}
      href={href}
      target={"_blank"}
    >
      {children}
    </a>
  );
};

export default AtomLink;

AtomLink.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
  href: PropTypes.string,
  style: PropTypes.object,
};
