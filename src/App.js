import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./CustomTheme";
import EmailRestaurant from "./pages/EmailRestaurant";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <EmailRestaurant />
    </ThemeProvider>
  );
};
export default App;
