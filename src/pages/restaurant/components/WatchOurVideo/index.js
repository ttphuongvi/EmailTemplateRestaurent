import React from "react";
import IMAGE_WATCH_OUR_VIDEO from "../../../../cdn/images/watch_our_video.jpg";
import IMAGE_WATCH_OUR_VIDEO_ICON from "../../../../cdn/images/watch_our_video_icon.png";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import AtomContent from "../../../../Atomic/atoms/Text/AtomContent";
import AtomLink from "../../../../Atomic/atoms/Text/AtomLink";

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
          <td style={{ position: "relative" }}>
            <TableSynthetic>
              <tr>
                <td>
                  <img src={IMAGE_WATCH_OUR_VIDEO} width="100%"></img>
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
                marginTop: theme.spacing(-3.125),
              }}
            >
              <AtomLink
                href="#"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  marginLeft: theme.spacing(-3.125),
                  width: theme.spacing(7.5),
                }}
              >
                <img
                  src={IMAGE_WATCH_OUR_VIDEO_ICON}
                  width={theme.spacing(7.5)}
                ></img>
              </AtomLink>
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <h2>Watch Our Video</h2>
            <AtomContent>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </AtomContent>
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default WatchOurVideo;
