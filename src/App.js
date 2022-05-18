import React from "react";
import { theme } from "./constants/theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Router from "./routes/router";

//TODO  FIZ BASEADO NO 4Food,SINTAM-SE A VONTADE PARA MUDAR ALGO QUE ESTA FALTANDO OU QUE PRECISE DE ALTERAÇÃO

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
