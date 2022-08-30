import React from "react";
import CaptionLight from "../../molecules/CaptionLight";
import HeadingSection from "../../molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../molecules/TableSynthetic";
import TitleLight from "../../molecules/TitleLight";
import ContentLight from "../../molecules/ContentLight";
import TableDeliciousFood from "../../molecules/TableDeliciousFood";
import { IMAGE_MENU_PASTA, IMAGE_MENU_SWEETENED } from "../../../constants";

const Menu = () => {
  const theme = useTheme();
  return (
    <td align="center" style={{ padding: theme.spacing(5) }}>
      <HeadingSection
        caption={<CaptionLight>MENU</CaptionLight>}
        title={<TitleLight>Our Delicious Food</TitleLight>}
        content={
          <ContentLight>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.{" "}
          </ContentLight>
        }
      ></HeadingSection>
      <TableSynthetic>
        <tr>
          <td style={{ width: "50%" }}>
            <TableDeliciousFood
              image={IMAGE_MENU_PASTA}
              subTitle="Pasta, Sauce Milk"
              content="Far far away, behind the word mountains, far from the countries"
            ></TableDeliciousFood>
          </td>
          <td>
            {" "}
            <TableDeliciousFood
              image={IMAGE_MENU_SWEETENED}
              subTitle="Sweetened Fruits"
              content="Far far away, behind the word mountains, far from the countries"
            ></TableDeliciousFood>
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Menu;
