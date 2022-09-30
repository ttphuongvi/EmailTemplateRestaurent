import React from "react";
import { useTheme } from "@mui/material/styles";
import HeadingSection from "../../../../Atomic/molecules/HeadingSection";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import TableSays from "./TableSays";
import PERSON_1 from "../../../../cdn/images/person_1.jpg";
import PERSON_2 from "../../../../cdn/images/person_2.jpg";

const Says = () => {
  const theme = useTheme();

  const says = [
    {
      image: PERSON_1,
      name: "Ronald Tuff",
      job: "Businessman",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: PERSON_2,
      name: "Willam Clarson",
      job: "Businessman",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];
  return (
    <td
      align="center"
      style={{
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(5),
      }}
    >
      <HeadingSection
        caption="Says"
        title="Testimonial"
        content="A small river named Duden flows by their place and supplies it with
            the necessary regelialia."
      />
      <TableSynthetic>
        <tr>
          {says.map((item, index) => {
            const key = index;

            return (
              <td
                key={key}
                width="50%"
                style={{ paddingTop: theme.spacing(2) }}
              >
                <TableSays
                  image={item.image}
                  name={item.name}
                  job={item.job}
                  content={item.content}
                />
              </td>
            );
          })}
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Says;
