import React from "react";
import { theme } from "./constants/theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
