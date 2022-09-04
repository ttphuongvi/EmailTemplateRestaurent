import React from "react";
import TableContentServices from "../../molecules/TableContentServices";
import {
  IMAGE_SERVICES_HEALTHY_FOOD,
  IMAGE_SERVICES_ORIGINAL_RECIPES,
} from "../../../constants";
import TableSynthetic from "../../molecules/TableSynthetic";
import HeadingSection from "../../molecules/HeadingSection";
import CaptionLight from "../../molecules/CaptionLight";
import TitleLight from "../../molecules/TitleLight";
import { useTheme } from "@mui/material/styles";
import ContentLight from "../../molecules/ContentLight";

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
        caption={<CaptionLight>Services</CaptionLight>}
        title={<TitleLight>Our Services</TitleLight>}
        content={
          <ContentLight>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </ContentLight>
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
