import React from "react";
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import Stack from "../../atoms/Stack";
import Section from "../../molecules/Section";


const Welcome = () => {
  return (
    // <StyledBox sx={{ backgroundColor: "rgba(0,0,0,.8)" }}>
    //   <Stack justifyContent="center" alignItems="center" spacing={1}>
    //     <Typography
    //       sx={(theme) => ({
    //         textTransform: "uppercase",
    //         color: theme.palette.text.darkBody,
    //         paddingBottom: theme.spacing(1),
    //         borderBottom: `2px solid ${theme.palette.primary.main}`
    //       })}
    //     >
    //       Welcom
    //     </Typography>
    //     <Typography
    //       variant="caption"
    //       sx={(theme) => ({ color: theme.palette.text.darkCaption })}
    //     >
    //       Welcome To RestoBar
    //     </Typography>
    //     <Typography
    //           sx={(theme) => ({
    //             color: theme.palette.text.darkBody
    //           })}
    //         >
    //           A small river named Duden flows by their place and supplies it
    //           with the necessary regelialia. It is a paradisematic country, in
    //           which roasted parts of sentences fly into your mouth.
    //         </Typography>
    //   </Stack>
    // </StyledBox>
    <Section caption='Welcome' subtitle='Welcome To RestoBar' content={
      <Typography  variant='content'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
    }>

    </Section>
  );
};
export default Welcome;
