import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: amber[800],
      light: "rgba(0,0,0,.4)",
      dark: "rgba(255,255,255,.4)",
    },
    secondary: {
      main: amber[500]
    },
    text: {
      lightCaption: "rgba(0,0,0,.4)",
      darkCaption: "rgba(255,255,255,.4)",
      lightContent: "rgba(0,0,0,.4)",
      darkContent: "rgba(255,255,255,.8)",
      lightSubtitle: "rgba(0,0,0)",
      darkSubtitle: "rgba(255,255,255)",
     

    }
  },
  typography: {
    caption:{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "13px",
      letterSpacing: "2px",
    },
    subtitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "28px",
      fontWeight: 700
    },
   
    content: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: 1.8,
    }
  }
});
export default customTheme;
