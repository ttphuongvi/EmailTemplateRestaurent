import { createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
  typography: {
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      paddingBottom: "12px",
      borderBottom: `3px solid ${yellow[800]}`,
    },
    subtitle1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    subtitle2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "20px",
      fontWeight: 700,
    },

    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: 1.8,
    },
  },
});
export default customTheme;
