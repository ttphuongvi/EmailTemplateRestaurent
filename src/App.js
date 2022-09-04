import React from "react";
import TemplateEmail from "./Atomic/template/TemplateEmail";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./CustomTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <TemplateEmail />
      </div>
    </ThemeProvider>
  );
};
export default App;
