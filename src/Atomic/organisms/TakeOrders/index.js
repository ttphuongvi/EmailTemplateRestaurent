import React from "react";
import Box from "../../atoms/Box";
import Table from "../../atoms/Table";
import Button from "../../molecules/Button";
import TableBody from "../../atoms/TableBody";
import TableRow from "../../atoms/TableRow";
import Section from "../../molecules/Section";
import Typography from "../../atoms/Typography";
import TypographyDarkContent from "../../molecules/TypographyDarkContent";
import { IMAGE_BACKGROUND_TAKEORDERS } from "../../../constants";
import TableCellStyles from "../../molecules/TableCellTyles";

const TakeOrders = () => {
  return (
    <TableCellStyles
      sx={{
        backgroundImage: `url(${IMAGE_BACKGROUND_TAKEORDERS})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "400px",
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCellStyles align="center">
              <Section
                title={
                  <Typography
                    variant="title"
                    sx={(theme) => ({ color: theme.palette.text.darktitle })}
                  >
                    We Serve Healthy & Delicious Foods
                  </Typography>
                }
                content={
                  <>
                    <TypographyDarkContent>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </TypographyDarkContent>
                    <Button>Get Your Order Here!</Button>
                  </>
                }
              ></Section>
            </TableCellStyles>
          </TableRow>
          {/* <Stack spacing={1} justifyContent="center" alignItems="center">
          <Typography
            variant="title"
            sx={(theme) => ({
              color: theme.palette.text.darktitle,
            })}
          >
            We Serve Healthy & Delicious Foods
          </Typography>
         
        </Stack> */}

          {/* <Section
          backgroundColor="theme.palette.background.black"
          color="darktitle"
          title="We Serve Healthy & Delicious Foods"
        ></Section> */}

          {/* <Image ratio={4 / 3} src={IMAGE_BACKGROUND_TAKEORDERS} /> */}

          {/* <Box>aaa</Box> */}
        </TableBody>
      </Table>
    </TableCellStyles>
  );
};
export default TakeOrders;
