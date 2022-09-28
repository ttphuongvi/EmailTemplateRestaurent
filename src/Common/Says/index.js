import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import HeadingSection from "../../Atomic/molecules/HeadingSection";
import AtomCaption from "../../Atomic/atoms/Text/AtomCaption";
import AtomTitle from "../../Atomic/atoms/Text/AtomTitle";
import AtomContent from "../../Atomic/atoms/Text/AtomContent";
import TableSynthetic from "../../Atomic/molecules/TableSynthetic";
import TableSays from "./TableSays";
import { IMAGE_USER_1, IMAGE_USER_2 } from "../../constants";

const Says = () => {
  const theme = useTheme();

  const says = [
    {
      image: IMAGE_USER_1,
      name: "Ronald Tuff",
      job: "Businessman",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: IMAGE_USER_2,
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
        caption={<AtomCaption>Says</AtomCaption>}
        title={<AtomTitle>Testimonial</AtomTitle>}
        content={
          <AtomContent>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </AtomContent>
        }
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
