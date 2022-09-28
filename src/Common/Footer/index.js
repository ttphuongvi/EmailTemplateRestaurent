import React from "react";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import FooterCopyrights from "./FooterCopyrights";
import FooterInfo from "./FooterInfo";

const index = () => {
  return (
    <td>
      <TableSynthetic>
        <tr>
          <FooterInfo />
        </tr>
        <tr>
          <FooterCopyrights />
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default index;
