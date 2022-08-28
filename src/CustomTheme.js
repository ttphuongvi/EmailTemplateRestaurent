import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: amber[800],
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
      lightSubtitle: "rgba(0,0,0)",
      darkSubtitle: "rgba(255,255,255)",
    },
    background: {
      black: "rgba(0,0,0,.8)",
      white: "#fff",
    },
  },
  typography: {
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      paddingBottom: "8px",
      borderBottom: `2px solid ${amber[800]}`,
    },
    subtitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "28px",
      fontWeight: 700,
    },

    content: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: 1.8,
    },
  },
});
export default customTheme;
