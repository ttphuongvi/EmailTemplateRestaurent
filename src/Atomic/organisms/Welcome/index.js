import React from "react";
import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import Stack from "../../atoms/Stack";
import Section from "../../molecules/Section";
import TableCellStyles from "../../molecules/TableCellTyles";

const Welcome = () => {
  return (
    <TableCellStyles
      align="center"
      sx={(theme) => ({ backgroundColor: theme.palette.background.dark })}
    >
      <Section
        caption={
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.text.darkCaption,
            })}
          >
            Welcom
          </Typography>
        }
        title={
          <Typography
            variant="title"
            sx={(theme) => ({ color: theme.palette.text.darktitle })}
          >
            Welcome To RestoBar
          </Typography>
        }
        content={
          <Typography
            variant="content"
            sx={(theme) => ({ color: theme.palette.text.darkContent })}
          >
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Typography>
        }
      ></Section>
    </TableCellStyles>
  );
};
export default Welcome;
