import React from "react";
import TemplateEmail from "./Atomic/template/TemplateEmail";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./CustomTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <TemplateEmail />
    </ThemeProvider>
  );
};
export default App;
