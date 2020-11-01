import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

import customTheme from "./components/theme/theme.js";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
