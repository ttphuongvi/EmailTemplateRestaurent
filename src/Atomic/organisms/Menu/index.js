import React from "react";
import Section from "../../molecules/Section";
import TableCellStyles from "../../molecules/TableCellTyles";
import TypographyLightContent from "../../molecules/TypographyLightContent";

const Menu = () => {
  return (
    <TableCellStyles>
      <Section
        caption={
          <TypographyLightContent variant="caption">
            MENU
          </TypographyLightContent>
        }
      ></Section>
    </TableCellStyles>
  );
};
export default Menu;
