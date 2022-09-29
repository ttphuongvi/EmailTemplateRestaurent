import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
});
export default customTheme;
