import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: amber[800]
    },
    secondary: {
      main: amber[500]
    },
    text: {
      lightCaption: "rgba(0,0,0,.4)",
      darkBody: "rgba(255,255,255,.8)",
      darkCaption: "#fff"
    }
  },
  typography: {
    caption: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.75rem",
      fontWeight: 700
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem"
    }
  }
});
export default customTheme;
