import React from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
// import LoginArea from "./pages/Login";
// import SignUp from "./pages/SignUp";
import VerifiedNav from "./components/VerifiedNav";
import DefaultNav from "./components/DefaultNav";
import UserPage from "./pages/UserPage";
import MainHome from "./pages/MainHome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/" exact component={ MainHome } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/about" component={ AboutUs } />
            <Route path="/contact" component={ ContactUs } />
            <Route path="/blog" component={ Blog } />
          </Switch>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
