import React from "react";
import { useTheme } from "@mui/material/styles";
import AtomCaption from "../../Atomic/atoms/Text/AtomCaption";
import TitleDark from "../../Atomic/atoms/Text/AtomTitle";
import ContentDark from "../../Atomic/atoms/Text/AtomContent";
import HeadingSection from "../../Atomic/molecules/HeadingSection";

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
      <HeadingSection
        caption={<AtomCaption dark>Welcom</AtomCaption>}
        title={<TitleDark dark>Welcome To RestoBar</TitleDark>}
        content={
          <ContentDark dark>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </ContentDark>
        }
      ></HeadingSection>
    </td>
  );
};
export default Welcome;
