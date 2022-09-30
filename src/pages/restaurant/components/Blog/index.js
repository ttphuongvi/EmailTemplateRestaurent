import React from "react";
import BLOG_1 from "../../../../cdn/images/blog_1.jpg";
import BLOG_2 from "../../../../cdn/images/blog_2.jpg";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../../../Atomic/molecules/TableSynthetic";
import HeadingSection from "../../../../Atomic/molecules/HeadingSection";
import TableBlogFood from "./TableBlogFood";

const Blog = () => {
  const theme = useTheme();

  const blog = [
    {
      image: BLOG_1,
      dateSubmitted: "POSTED ON FEB 18, 2019 FOOD",
      subTitle: "Healthy Foods For Kids",
      content:
        "Far far away, behind the word mountains, far from the countries",
    },
    {
      image: BLOG_2,
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
        caption="Blog"
        title="Read Stories"
        content="
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia."
      />
      <TableSynthetic>
        <tr>
          {blog.map((item, index) => {
            const key = index;

            return (
              <td
                key={key}
                width="50%"
                style={{ paddingTop: theme.spacing(2) }}
              >
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
