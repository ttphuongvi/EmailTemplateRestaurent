import React from "react";
import Button from "../../../../Atomic/atoms/Button";
import BACKGROUND from "../../../../cdn/images/background.jpg";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import HeadingSection from "../../../../Atomic/molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";

const TakeOrders = () => {
  const theme = useTheme();

  return (
    <td
      style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: theme.spacing(50),
        padding: theme.spacing(0, 5),
      }}
    >
      <TableSynthetic>
        <tr>
          <td align="center">
            <HeadingSection
              title="We Serve Healthy & Delicious Foods"
              content="  A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth."
              dark
            ></HeadingSection>
            <Button>Get Your Order Here!</Button>
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default TakeOrders;
