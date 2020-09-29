import React, { Component } from "react";
import { ThemeProvider, theme, Button } from "@chakra-ui/core";
import DefaultNav from "../components/DefaultNav";
import VerifiedNav from "../components/VerifiedNav";
import BlogTrendingNew from "../components/blog/BlogTrendingNew";
import BlogGrid from "../components/blog/BlogGrid";
import firebase from "firebase";

import getDocs from "../hooks/ReadArticlesFromFirebase";

export class Blog extends Component {
  state = {
    currentNav: <DefaultNav />,
  };

  checkIfSignedIn() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.state.currentNav}
        <BlogTrendingNew />
        <BlogGrid />
        <Button onClick={getDocs}>
          Click Me For Juicy Firebse Data! Members Only!
        </Button>
      </ThemeProvider>
    );
  }
}

export default Blog;
