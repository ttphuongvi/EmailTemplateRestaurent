import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

const ContentLight = (props) => {
  const theme = useTheme();
  return (
    <p
      style={{
        fontFamily: theme.typography.body1.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
        color: alpha(theme.palette.common.black, 0.4),
      }}
    >
      {props.children}
    </p>
  );
};

export default ContentLight;
