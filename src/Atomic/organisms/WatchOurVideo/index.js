import React from "react";
import Section from "../../molecules/Section";
import Table from "../../molecules/TableSynthetic";
import TableBody from "../../atoms/TableBody";
import TableCell from "../../atoms/TableCell";
import TableCellNoneBorderBottom from "../../molecules/TableCellNoneBorderBottom";
import Typography from "../../atoms/Typography";
import TableRow from "../../atoms/TableRow";
import Box from "../../atoms/Box";
import {
  IMAGE_WATCH_OUR_VIDEO,
  IMAGE_WATCH_OUR_VIDEO_ICON,
} from "../../../constants";
import Link from "../../atoms/Link";
import Stack from "../../atoms/Stack";
import TypographyLightContent from "../../molecules/TypographyLightContent";

const WatchOurVideo = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.palette.background.light })}>
      <Section
        content={
          <Table>
            <TableRow>
              <TableCellNoneBorderBottom
                align="center"
                padding="none"
                sx={{ position: "relative" }}
              >
                <Table>
                  <TableCellNoneBorderBottom align="center" padding="none">
                    <Box
                      component="img"
                      src={IMAGE_WATCH_OUR_VIDEO}
                      sx={{ width: "100%" }}
                    ></Box>
                  </TableCellNoneBorderBottom>
                </Table>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    marginTop: "-25px",
                  }}
                >
                  <Link href="#">
                    <Box
                      component="img"
                      src={IMAGE_WATCH_OUR_VIDEO_ICON}
                      sx={{ width: "60px" }}
                    ></Box>
                  </Link>
                </Box>
              </TableCellNoneBorderBottom>
            </TableRow>
            <TableRow>
              <TableCellNoneBorderBottom align="center">
                <Stack spacing={1}>
                  <Typography variant="title">Watch Our Video</Typography>
                  <TypographyLightContent>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </TypographyLightContent>
                </Stack>
              </TableCellNoneBorderBottom>
            </TableRow>
          </Table>
        }
      ></Section>
    </Box>
  );
};

export default WatchOurVideo;
