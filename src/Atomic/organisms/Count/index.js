import React from "react";
import { IMAGE_BACKGROUND } from "../../../constants";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../molecules/TableSynthetic";
import TableCount from "../../molecules/TableCount";

const Count = () => {
  const theme = useTheme();
  return (
    <td
      style={{
        backgroundImage: `url(${IMAGE_BACKGROUND})`,
        backgroundSize: "cover",
        padding: theme.spacing(6, 2),
      }}
    >
      <TableSynthetic>
        <tr>
          <td width={"25%"}>
            <TableCount number={9457} name="Happy Customer" />
          </td>
          <td width={"25%"}>
            <TableCount
              number={20}
              name="Years of Experienced
80
"
            ></TableCount>
          </td>
          <td width={"25%"}>
            <TableCount number={80} name="Branches" />
          </td>
          <td width={"25%"}>
            <TableCount number={980} name="Staff" />
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default Count;
