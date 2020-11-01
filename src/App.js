import React, { Component } from "react";
// import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import NewStory from "./pages/NewStory";
import ForgotPassword from "./pages/ForgotPassword";
import BlogContentPost from "./components/blog/BlogContentPost";

// import customTheme from "./components/theme/theme.js";

export class App extends Component {
  render() {
    return (
      // <ThemeProvider theme={customTheme}>
      //   <ColorModeProvider>
      //     <CSSReset />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/newstory" component={NewStory} />
          <Route path="/blog/:docId" component={BlogContentPost} />
          <Route path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </Router>
      //   </ColorModeProvider>
      // </ThemeProvider>
    );
  }
}

export default App;
