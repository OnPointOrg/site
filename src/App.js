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
import UserPage from "./pages/UserPage";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <SignUp />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
