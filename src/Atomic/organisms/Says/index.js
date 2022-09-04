import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import HeadingSection from "../../molecules/HeadingSection";
import CaptionLight from "../../molecules/CaptionLight";
import TitleLight from "../../molecules/TitleLight";
import ContentLight from "../../molecules/ContentLight";
import TableSynthetic from "../../molecules/TableSynthetic";
import TableSays from "../../molecules/TableSays";
import { IMAGE_USER_1, IMAGE_USER_2 } from "../../../constants";

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
        caption={<CaptionLight>Says</CaptionLight>}
        title={<TitleLight>Testimonial</TitleLight>}
        content={
          <ContentLight>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </ContentLight>
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
