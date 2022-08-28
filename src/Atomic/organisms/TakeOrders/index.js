import React from "react";
import Box from "../../atoms/Box";
import Table from "../../atoms/Table";
import Stack from "../../atoms/Stack";
import Button from "../../molecules/Button";
import StyledBox from "../../molecules/StyledBox";
import TableBody from "../../atoms/TableBody";
import TableCell from "../../atoms/TableCell";
import TableCellNoneBorderBottom from "../../molecules/TableCellNoneBorderBottom";
import TableRow from "../../atoms/TableRow";
import Section from "../../molecules/Section";
import Typography from "../../atoms/Typography";

const TakeOrders = () => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCellNoneBorderBottom padding="none" align="center">
            <Section
              subtitle={
                <Typography
                  variant="subtitle"
                  sx={(theme) => ({ color: theme.palette.text.darkSubtitle })}
                >
                  We Serve Healthy & Delicious Foods
                </Typography>
              }
              content={
                <>
                  <Typography
                    variant="content"
                    sx={(theme) => ({
                      color: theme.palette.text.darkContent,
                    })}
                  >
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </Typography>
                  <Button>Get Your Order Here!</Button>
                </>
              }
            ></Section>
          </TableCellNoneBorderBottom>
        </TableRow>
        {/* <Stack spacing={1} justifyContent="center" alignItems="center">
          <Typography
            variant="subtitle"
            sx={(theme) => ({
              color: theme.palette.text.darkSubtitle,
            })}
          >
            We Serve Healthy & Delicious Foods
          </Typography>
         
        </Stack> */}

        {/* <Section
          backgroundColor="theme.palette.background.black"
          color="darkSubtitle"
          subtitle="We Serve Healthy & Delicious Foods"
        ></Section> */}

        {/* <Image ratio={4 / 3} src={IMAGE_BACKGROUND_TAKEORDERS} /> */}

        {/* <Box>aaa</Box> */}
      </TableBody>
    </Table>
  );
};
export default TakeOrders;
