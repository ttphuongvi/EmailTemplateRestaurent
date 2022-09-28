import { createTheme, useTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";
const theme = useTheme();
const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
  typography: {
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: theme.spacing(1.625),
      letterSpacing: theme.spacing(0.4),
      textTransform: "uppercase",
      paddingBottom: theme.spacing(1.5),
      borderBottom: `${theme.spacing(0.375)} solid ${yellow[800]}`,
    },
    subtitle1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: theme.spacing(3.5),
      fontWeight: 700,
      lineHeight: 1.4,
    },
    subtitle2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: theme.spacing(2.5),
      fontWeight: 700,
    },

    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: theme.spacing(1.875),
      lineHeight: 1.8,
    },
  },
});
export default customTheme;
