import React from "react";
import { useTheme } from "@mui/material/styles";

const TitleDark = (props) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.subtitle1.fontFamily,
        color: theme.palette.common.white,
      }}
    >
      {props.children}
    </h2>
  );
};

export default TitleDark;
