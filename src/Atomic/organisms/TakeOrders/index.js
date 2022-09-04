import React from "react";
import Button from "../../molecules/Button";
import { IMAGE_BACKGROUND } from "../../../constants";
import TitleDark from "../../molecules/TitleDark";
import ContentDark from "../../molecules/ContentDark";
import TableSynthetic from "../../molecules/TableSynthetic";
import HeadingSection from "../../molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";

const TakeOrders = () => {
  const theme = useTheme();

  return (
    <td
      style={{
        backgroundImage: `url(${IMAGE_BACKGROUND})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "400px",
        padding: theme.spacing(0, 5),
      }}
    >
      <TableSynthetic>
        <tr>
          <td align="center">
            <HeadingSection
              title={<TitleDark>We Serve Healthy & Delicious Foods</TitleDark>}
              content={
                <>
                  <ContentDark>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </ContentDark>
                  <Button>Get Your Order Here!</Button>
                </>
              }
            ></HeadingSection>
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default TakeOrders;
