import { createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
    secondary: {
      main: "#fff",
    },
    lightCaption: {
      main: "rgba(0,0,0)",
    },
    darkCaption: {
      main: "rgba(255,255,255)",
    },

    text: {
      lightContent: "rgba(0,0,0,.4)",
      darkContent: "rgba(255,255,255,.8)",
      lighttitle: "rgba(0,0,0)",
      darktitle: "rgba(255,255,255)",
      lightCaption: "rgba(0,0,0,.4)",
      darkCaption: "rgba(255,255,255,.4)",
    },
    background: {
      dark: "rgba(0,0,0,.8)",
      light: grey[50],
    },
  },
  typography: {
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      paddingBottom: "8px",
      borderBottom: `2px solid ${yellow[800]}`,
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
