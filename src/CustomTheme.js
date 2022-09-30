import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h6: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});
export default customTheme;
