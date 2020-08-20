import React, { Component } from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import Account from "./pages/Account";
import MainHome from "./pages/MainHome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import CreateStory from "./pages/CreateStory";
import Dashboard from "./pages/Dashboard";

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Router>
            <Switch>
              <Route path="/" exact component={MainHome} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/blog" component={Blog} />
              <Route path="/newstory" component={CreateStory} />
              <Route path="/account" component={Account} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
