import React from "react";
import TableSynthetic from "../../molecules/TableSynthetic";
import { alpha, useTheme } from "@mui/material/styles";
import ContentDark from "../../molecules/ContentDark";

const FooterCopyrights = () => {
  const theme = useTheme();
  return (
    <td
      style={{
        backgroundColor: theme.palette.common.black,
        padding: theme.spacing(0, 5),
      }}
    >
      <table>
        <tbody>
          <tr>
            <td valign="top" width={"30%"}>
              <TableSynthetic>
                <tr>
                  <td align="left">
                    <ContentDark>
                      © 2018 Restobar. All Rights Reserved
                    </ContentDark>
                  </td>
                </tr>
              </TableSynthetic>
            </td>
            <td valign="top" width={"50%"}>
              <TableSynthetic>
                <tr>
                  <td align="right">
                    <a href="#" style={{ textDecoration: "none" }}>
                      <ContentDark>Unsubcribe</ContentDark>
                    </a>
                  </td>
                </tr>
              </TableSynthetic>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default FooterCopyrights;
