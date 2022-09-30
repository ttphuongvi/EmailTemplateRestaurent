import React from "react";
import BACKGROUND from "../../../../cdn/images/background.jpg";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import TableCount from "./TableCount";

const Count = () => {
  const theme = useTheme();

  const count = [
    { number: 9457, name: "Happy Customers" },
    { number: 20, name: "Years of Experienced 80" },
    { number: 80, name: "Branches" },
    { number: 980, name: "Staff" },
  ];
  return (
    <td
      style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundSize: "cover",
        padding: theme.spacing(7, 2),
      }}
    >
      <TableSynthetic>
        <tr>
          {count.map((item, index) => {
            const key = index;

            return (
              <td key={key} width="25%">
                <TableCount number={item.number} name={item.name}></TableCount>
              </td>
            );
          })}
        </tr>
      </TableSynthetic>
    </td>
  );
};

export default Count;
