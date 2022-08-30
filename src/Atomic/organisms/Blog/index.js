import React from "react";
import { IMAGE_BACKGROUND } from "../../../constants";
import { useTheme } from "@mui/material/styles";
import TableSynthetic from "../../molecules/TableSynthetic";
import TableBlog from "../../molecules/TableBlog";

const Blog = () => {
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
            <TableBlog number={9457} name="Happy Customer" />
          </td>
          <td width={"25%"}>
            <TableBlog
              number={20}
              name="Years of Experienced
80
"
            ></TableBlog>
          </td>
          <td width={"25%"}>
            <TableBlog number={80} name="Branches" />
          </td>
          <td width={"25%"}>
            <TableBlog number={980} name="Staff" />
          </td>
        </tr>
      </TableSynthetic>
    </td>
  );
};
export default Blog;
