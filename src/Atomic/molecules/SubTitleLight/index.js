import React from "react";
import { useTheme } from "@mui/material/styles";

const SubTitleLight = (props) => {
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
      {props.children}
    </h2>
  );
};

export default SubTitleLight;
