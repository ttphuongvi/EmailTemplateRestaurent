import React from "react";
import Section from "../../molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";
import CaptionDark from "../../molecules/CaptionDark";
import TitleDark from "../../molecules/TitleDark";
import ContentDark from "../../molecules/ContentDark";

const Welcome = () => {
  const theme = useTheme();
  return (
    <td
      align="center"
      style={{
        backgroundColor: theme.palette.grey[900],
        padding: theme.spacing(5),
      }}
    >
      <Section
        caption={<CaptionDark>Welcom</CaptionDark>}
        title={<TitleDark>Welcome To RestoBar</TitleDark>}
        content={
          <ContentDark>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </ContentDark>
        }
      ></Section>
    </td>
  );
};
export default Welcome;
