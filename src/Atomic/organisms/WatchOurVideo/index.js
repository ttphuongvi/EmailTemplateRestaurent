import React from "react";
import {
  IMAGE_WATCH_OUR_VIDEO,
  IMAGE_WATCH_OUR_VIDEO_ICON,
} from "../../../constants";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../molecules/TableSynthetic";
import ContentLight from "../../molecules/ContentLight";

const WatchOurVideo = () => {
  const theme = useTheme();
  return (
    <td
      style={{
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(5),
      }}
    >
      <TableSynthetic>
        <tr>
          <td align="center" style={{ position: "relative" }}>
            <TableSynthetic>
              <tr>
                <td align="center" padding="none">
                  <img
                    src={IMAGE_WATCH_OUR_VIDEO}
                    style={{ width: "100%" }}
                  ></img>
                </td>
              </tr>
            </TableSynthetic>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                bottom: 0,
                marginTop: "-25px",
              }}
            >
              <a
                href="#"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  marginLeft: "-25px",
                  width: "60px",
                }}
              >
                <img
                  src={IMAGE_WATCH_OUR_VIDEO_ICON}
                  style={{ width: "60px" }}
                ></img>
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <h2>Watch Our Video</h2>
            <ContentLight>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </ContentLight>
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default WatchOurVideo;
