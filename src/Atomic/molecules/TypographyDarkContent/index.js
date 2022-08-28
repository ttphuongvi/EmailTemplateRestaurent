import React from "react";
import Typography from "../../atoms/Typography";

const TypographyContentDark = (props) => {
  return (
    <Typography
      variant="content"
      sx={(theme) => ({ color: theme.palette.text.darkContent })}
    >
      {props.children}
    </Typography>
  );
};

export default TypographyContentDark;
