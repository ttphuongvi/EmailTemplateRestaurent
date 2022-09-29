import React from "react";
import AtomCaption from "../../Atomic/atoms/Text/AtomCaption";
import HeadingSection from "../../Atomic/molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import AtomTitle from "../../Atomic/atoms/Text/AtomTitle";
import AtomContent from "../../Atomic/atoms/Text/AtomContent";
import TableDeliciousFood from "./TableDeliciousFood";
import { IMAGE_MENU_PASTA, IMAGE_MENU_SWEETENED } from "../../constants";

const Menu = () => {
  const theme = useTheme();

  const menu = [
    {
      image: IMAGE_MENU_PASTA,
      subTitle: "Pasta, Sauce Milk",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: IMAGE_MENU_SWEETENED,
      subTitle: "Sweetened Fruits",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];

  return (
    <td align="center" style={{ padding: theme.spacing(5) }}>
      <HeadingSection
        caption="MENU"
        title="Our Delicious Food"
        content="A small river named Duden flows by their place and supplies it with
            the necessary regelialia."
      ></HeadingSection>
      <TableSynthetic>
        <tr>
          {menu.map((item, index) => {
            const key = index;

            return (
              <td key={key} width="50%">
                <TableDeliciousFood
                  image={item.image}
                  subTitle={item.subTitle}
                  content={item.content}
                ></TableDeliciousFood>
              </td>
            );
          })}
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Menu;
