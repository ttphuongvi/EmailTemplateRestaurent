import React from "react";
import HeadingSection from "../../../../Atomic/molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import TableDeliciousFood from "./TableDeliciousFood";
import MENU_PASTA from "../../../../cdn/images/menu_pasta.jpg";
import MENU_SWEETENED from "../../../../cdn/images/menu_sweetened.jpg";

const Menu = () => {
  const theme = useTheme();

  const menu = [
    {
      image: MENU_PASTA,
      subTitle: "Pasta, Sauce Milk",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: MENU_SWEETENED,
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
