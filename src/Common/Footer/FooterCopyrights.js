import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import AtomContent from "../../Atomic/atoms/Text/AtomContent";

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
                    <AtomContent dark>
                      © 2018 Restobar. All Rights Reserved
                    </AtomContent>
                  </td>
                </tr>
              </TableSynthetic>
            </td>
            <td valign="top" width={"50%"}>
              <TableSynthetic>
                <tr>
                  <td align="right">
                    <a href="#" style={{ textDecoration: "none" }}>
                      <AtomContent dark>Unsubcribe</AtomContent>
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
