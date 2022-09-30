import React from "react";
import TableContentServices from "./TableContentServices";
import SERVICES_HEALTHY_FOOD from "../../../../cdn/images/services_healthy_food.png";
import SERVICES_ORIGINAL_RECIPES from "../../../../cdn/images/services_original_recipes.png";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import HeadingSection from "../../../../Atomic/molecules/HeadingSection";
import { useTheme } from "@mui/material/styles";

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      image: SERVICES_HEALTHY_FOOD,
      subTitle: "Healthy Food",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: SERVICES_ORIGINAL_RECIPES,
      subTitle: "Original Recipes",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];

  return (
    <td align="center" style={{ padding: theme.spacing(5) }}>
      <HeadingSection
        caption="Services"
        title="Our Services"
        content=" A small river named Duden flows by their place and supplies it with
            the necessary regelialia."
      ></HeadingSection>
      <TableSynthetic>
        <tr>
          {services.map((item, index) => {
            const key = index;
            return (
              <td style={{ paddingTop: theme.spacing(3) }} key={key}>
                <TableContentServices
                  image={item.image}
                  subTitle={item.subTitle}
                  content={item.content}
                ></TableContentServices>
              </td>
            );
          })}
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Services;
