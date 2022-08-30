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

const Services = () => {
  return (
    <TableCellStyles align="center">
      <Section
        caption={
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.text.lightCaption,
            })}
          >
            Services
          </Typography>
        }
        title={<Typography variant="title">Our Services</Typography>}
        content={
          <Stack spacing={2}>
            <Typography
              sx={(theme) => ({ color: theme.palette.text.lightContent })}
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </Typography>
          </Stack>
        }
      ></Section>
      <TableSynthetic>
        <TableRow>
          <TableCell padding="none" sx={{ borderBottom: "none" }}>
            <TableContentServices
              image={IMAGE_SERVICES_HEALTHY_FOOD}
              subTitle="Healthy Foods"
              content="Far far away, behind the word mountains, far from the countries"
            />
          </TableCell>
          <TableCell padding="none" sx={{ borderBottom: "none" }}>
            <TableContentServices
              image={IMAGE_SERVICES_ORIGINAL_RECIPES}
              subTitle="Original Recipes"
              content="Far far away, behind the word mountains, far from the countries"
            />
          </TableCell>
        </TableRow>
      </TableSynthetic>
    </TableCellStyles>
  );
};
export default Services;
