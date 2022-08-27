import React from "react";
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import Stack from "../../atoms/Stack";

const WelcomToRestoBar = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0,.8)", width: "100%" }}>
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Typography
          sx={(theme) => ({
            textTransform: "uppercase",
            color: theme.palette.text.darkTitle,
            borderBottom: `2px solid ${theme.palette.primary.main}`
          })}
        >
          Welcom
        </Typography>
        <Typography
          variant="caption"
          sx={(theme) => ({ color: theme.palette.text.darkCaption })}
        >
          Welcome To RestoBar
        </Typography>
      </Stack>
    </Box>
  );
};
export default WelcomToRestoBar;
