import React from "react";
import Box from "../../atoms/Box";
import { IMAGE_BACKGROUND_TAKEORDERS } from "../../../constants";
import Typography from "../../atoms/Typography";
import Stack from "../../atoms/Stack";
import Button from "../../molecules/Button";
import StyledBox from "../../molecules/StyledBox";

const TakeOrders = () => {
  return (
    <>
      <Box
        // component="img"
        // src={IMAGE_BACKGROUND_TAKEORDERS}
        sx={{
          backgroundImage: `url(${IMAGE_BACKGROUND_TAKEORDERS})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "400px"
        }}
      >
        <StyledBox>
          <Stack
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({
              height: "400px"
            })}
          >
            <Typography
              variant="caption"
              sx={(theme) => ({
                color: theme.palette.text.darkCaption
              })}
            >
              We Serve Healthy & Delicious Foods
            </Typography>
            <Typography
              sx={(theme) => ({
                color: theme.palette.text.darkBody
              })}
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Typography>
            <Button>Get Your Order Here!</Button>
          </Stack>
        </StyledBox>
      </Box>
      {/* <Image ratio={4 / 3} src={IMAGE_BACKGROUND_TAKEORDERS} /> */}

      {/* <Box>aaa</Box> */}
    </>
  );
};
export default TakeOrders;
