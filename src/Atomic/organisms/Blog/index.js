import React from "react";
import {
  IMAGE_BACKGROUND,
  IMAGE_BLOG_1,
  IMAGE_BLOG_2,
} from "../../../constants";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../molecules/TableSynthetic";

import HeadingSection from "../../molecules/HeadingSection";
import CaptionLight from "../../molecules/CaptionLight";
import TitleLight from "../../molecules/TitleLight";
import ContentLight from "../../molecules/ContentLight";
import TableBlogFood from "../../molecules/TableBlogFood";

const Blog = () => {
  const theme = useTheme();

  const blog = [
    {
      image: IMAGE_BLOG_1,
      dateSubmitted: "POSTED ON FEB 18, 2019 FOOD",
      subTitle: "Healthy Foods For Kids",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: IMAGE_BLOG_2,
      dateSubmitted: "POSTED ON FEB 18, 2019 FOOD",
      subTitle: "A Fresh Food Organic",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
  ];
  return (
    <td
      align="center"
      style={{
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(5),
      }}
    >
      <HeadingSection
        caption={<CaptionLight>Blog</CaptionLight>}
        title={<TitleLight>Read Stories</TitleLight>}
        content={
          <ContentLight>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </ContentLight>
        }
      />
      <TableSynthetic>
        <tr>
          {blog.map((item, index) => {
            const key = index;

            return (
              <td key={key} width="50%" style={{ paddingTop: "20px" }}>
                <TableBlogFood
                  image={item.image}
                  dateSubmitted={item.dateSubmitted}
                  subTitle={item.subTitle}
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
export default Blog;
