import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
// const theme = useTheme();
const customTheme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
});
export default customTheme;
