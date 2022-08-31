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
        padding: theme.spacing(5),
        borderTop: `1px solid ${theme.palette.grey[800]}`,
      }}
    >
      <table>
        <tbody>
          <tr>
            <td valign="top" width={"33.333%"}>
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
                    <ContentDark>Unsubcribe</ContentDark>
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
