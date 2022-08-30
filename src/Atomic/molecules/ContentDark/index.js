import React from "react";
import { useTheme } from "@mui/material/styles";

const ContentDark = (props) => {
  const theme = useTheme();
  return (
    <p
      style={{
        fontFamily: theme.typography.body1.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
        color: theme.palette.grey[200],
      }}
    >
      {props.children}
    </p>
  );
};

export default ContentDark;
