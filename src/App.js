import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
// import LoginArea from "./pages/Login";
// import SignUp from "./pages/SignUp";
import VerifiedNav from "./components/VerifiedNav"
import DefaultNav from "./components/DefaultNav";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <DefaultNav />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
