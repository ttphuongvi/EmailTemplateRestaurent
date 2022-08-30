import React from "react";
import TableSynthetic from "../../molecules/TableSynthetic";
import { alpha, useTheme } from "@mui/material/styles";
import TableFooterInfo from "../../molecules/TableFooterInfo";
import ContentDark from "../../molecules/ContentDark";

const FooterInfo = () => {
  const theme = useTheme();
  return (
    <td
      style={{
        backgroundColor: theme.palette.common.black,
        padding: theme.spacing(5),
      }}
    >
      <TableSynthetic>
        <tr>
          <td
            width="33.333%"
            valign="top"
            style={{ paddingTop: theme.spacing(2) }}
          >
            <TableFooterInfo
              heading="RestoBar"
              content={
                <ContentDark>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </ContentDark>
              }
            />
          </td>
          <td
            valign="top"
            width="33.333%"
            style={{ paddingTop: theme.spacing(2) }}
          >
            <TableFooterInfo
              heading="	
              Contact Info"
              content={
                <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                  <li>
                    <ContentDark>
                      {" "}
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </ContentDark>
                  </li>
                  <li>
                    <ContentDark>+2 392 3929 210</ContentDark>
                  </li>
                </ul>
              }
            />
          </td>
          <td
            valign="top"
            width="33.333%"
            style={{ paddingTop: theme.spacing(2) }}
          >
            <TableFooterInfo
              heading="Useful Links"
              content={
                <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <ContentDark>
                      <a
                        href="#breakfast"
                        style={{
                          color: theme.palette.common.white,
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        Breakfast
                      </a>
                    </ContentDark>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <ContentDark>
                      <a
                        href="#lunch"
                        style={{
                          color: theme.palette.common.white,
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        Lunch
                      </a>
                    </ContentDark>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <ContentDark>
                      <a
                        href="#dinner"
                        style={{
                          color: theme.palette.common.white,
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        Dinner
                      </a>
                    </ContentDark>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <ContentDark>
                      <a
                        href="#dessert"
                        style={{
                          color: theme.palette.common.white,
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        Dessert
                      </a>
                    </ContentDark>
                  </li>
                </ul>
              }
            />
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default FooterInfo;
