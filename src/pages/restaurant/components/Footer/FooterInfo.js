import React from "react";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import TableFooterInfo from "./TableFooterInfo";
import AtomContent from "../../../../Atomic/atoms/Text/AtomContent";
import AtomLink from "../../../../Atomic/atoms/Text/AtomLink";

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
          <td width="30%" valign="top" style={{ paddingTop: theme.spacing(2) }}>
            <TableFooterInfo
              heading="RestoBar"
              content={
                <AtomContent dark>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </AtomContent>
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
                    <AtomContent dark>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </AtomContent>
                  </li>
                  <li>
                    <AtomLink href="tel:3923929210">
                      <AtomContent dark> +2 392 3929 210</AtomContent>
                    </AtomLink>
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
                    <AtomContent dark>
                      <AtomLink dark href="#breakfast">
                        Breakfast
                      </AtomLink>
                    </AtomContent>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <AtomContent dark>
                      <AtomLink dark target={"_blank"} href="#lunch">
                        Lunch
                      </AtomLink>
                    </AtomContent>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <AtomContent dark>
                      <AtomLink dark href="#dinner">
                        Dinner
                      </AtomLink>
                    </AtomContent>
                  </li>
                  <li style={{ marginBottom: theme.spacing(1) }}>
                    <AtomContent dark>
                      <AtomLink dark href="#dessert">
                        Dessert
                      </AtomLink>
                    </AtomContent>
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
