import React from "react";
import Section from "../../molecules/HeadingSection";
import TableCell from "../../atoms/TableCell";
import TableRow from "../../atoms/TableRow";
import Typography from "../../atoms/Typography";
import TableContentServices from "../../molecules/TableContentServices";
import {
  IMAGE_SERVICES_HEALTHY_FOOD,
  IMAGE_SERVICES_ORIGINAL_RECIPES,
} from "../../../constants";
import Stack from "../../atoms/Stack";
import TableCellStyles from "../../molecules/TableCellTyles";
import TableSynthetic from "../../molecules/TableSynthetic";
import HeadingSection from "../../molecules/HeadingSection";
import CaptionLight from "../../molecules/CaptionLight";
import TitleLight from "../../molecules/TitleLight";
import { useTheme } from "@mui/material/styles";
import ContentLight from "../../molecules/ContentLight";

const Services = () => {
  const theme = useTheme();
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
          <td>
            <TableContentServices
              image={IMAGE_SERVICES_HEALTHY_FOOD}
              subTitle="Healthy Foods"
              content="Far far away, behind the word mountains, far from the countries"
            />
          </td>
          <TableCell padding="none" sx={{ borderBottom: "none" }}>
            <TableContentServices
              image={IMAGE_SERVICES_ORIGINAL_RECIPES}
              subTitle="Original Recipes"
              content="Far far away, behind the word mountains, far from the countries"
            />
          </TableCell>
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Services;
