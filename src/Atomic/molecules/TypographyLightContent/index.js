import React from "react";
import Typography from "../../atoms/Typography";

const TypographyLightContent = (props) => {
  return (
    <Typography
      variant="content"
      sx={(theme) => ({ color: theme.palette.text.lightContent })}
    >
      {props.children}
    </Typography>
  );
};

export default TypographyLightContent;
