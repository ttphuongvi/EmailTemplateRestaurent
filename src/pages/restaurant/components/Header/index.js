import { useTheme } from "@mui/material/styles";
import React from "react";
import AtomLink from "../../../../Atomic/atoms/Text/AtomLink";

const Header = () => {
  const theme = useTheme();
  return (
    <td
      align="center"
      style={{ background: "#fff", padding: theme.spacing(1.875) }}
    >
      <h1
        style={{
          fontSize: theme.spacing(2.5),
          textTransform: "uppercase",
          fontFamily: " 'Montserrat', sans-serif",
        }}
      >
        <AtomLink href="#">RestoBar</AtomLink>
      </h1>{" "}
    </td>
  );
};
export default Header;
