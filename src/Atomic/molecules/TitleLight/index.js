import React from "react";
import { useTheme } from "@mui/material/styles";

const TitleLight = (props) => {
  const theme = useTheme();
  return (
    <h2
      style={{
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.subtitle1.fontFamily,
        color: theme.palette.common.black,
      }}
    >
      {props.children}
    </h2>
  );
};

export default TitleLight;
