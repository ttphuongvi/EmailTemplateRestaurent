import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

const CaptionLight = (props) => {
  const theme = useTheme();
  return (
    <span
      style={{
        fontFamily: theme.typography.caption.fontFamily,
        fontSize: theme.typography.caption.fontSize,
        letterSpacing: theme.typography.caption.letterSpacing,
        textTransform: theme.typography.caption.textTransform,
        paddingBottom: theme.typography.caption.paddingBottom,
        borderBottom: theme.typography.caption.borderBottom,
        color: alpha(theme.palette.common.black, 0.4),
      }}
    >
      {props.children}
    </span>
  );
};

export default CaptionLight;
