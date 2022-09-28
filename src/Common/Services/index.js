import React from "react";
import TableContentServices from "./TableContentServices";
import {
  IMAGE_SERVICES_HEALTHY_FOOD,
  IMAGE_SERVICES_ORIGINAL_RECIPES,
} from "../../constants";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import HeadingSection from "../../Atomic/molecules/HeadingSection";
import AtomCaption from "../../Atomic/atoms/Text/AtomCaption";
import AtomTitle from "../../Atomic/atoms/Text/AtomTitle";
import { useTheme } from "@mui/material/styles";
import AtomContent from "../../Atomic/atoms/Text/AtomContent";

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      image: IMAGE_SERVICES_HEALTHY_FOOD,
      subTitle: "Healthy Food",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: IMAGE_SERVICES_ORIGINAL_RECIPES,
      subTitle: "Original Recipes",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];

  return (
    <td align="center" style={{ padding: theme.spacing(5) }}>
      <HeadingSection
        caption={<AtomCaption>Services</AtomCaption>}
        title={<AtomTitle>Our Services</AtomTitle>}
        content={
          <AtomContent>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </AtomContent>
        }
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
