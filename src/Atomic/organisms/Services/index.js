import React from "react";
import Section from "../../molecules/Section";
import Table from "../../atoms/Table";
import TableBody from "../../atoms/TableBody";
import TableCell from "../../atoms/TableCell";
import TableRow from "../../atoms/TableRow";
import Typography from "../../atoms/Typography";
import TableCellNoneBorderBottom from "../../molecules/TableCellNoneBorderBottom";
import TableContentServices from "../../molecules/TableContentServices";
import {
  IMAGE_SERVICES_HEALTHY_FOOD,
  IMAGE_SERVICES_ORIGINAL_RECIPES,
} from "../../../constants";
import Stack from "../../atoms/Stack";

const Services = () => {
  return (
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
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCellNoneBorderBottom>
                  <TableContentServices
                    image={IMAGE_SERVICES_HEALTHY_FOOD}
                    subTitle="Healthy Foods"
                    content="Far far away, behind the word mountains, far from the countries"
                  />
                </TableCellNoneBorderBottom>
                <TableCellNoneBorderBottom>
                  <TableContentServices
                    image={IMAGE_SERVICES_ORIGINAL_RECIPES}
                    subTitle="Original Recipes"
                    content="Far far away, behind the word mountains, far from the countries"
                  />
                </TableCellNoneBorderBottom>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      }
    ></Section>
  );
};
export default Services;
