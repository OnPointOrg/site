import React, { Component } from "react";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import BlogGrid from "../components/blog/BlogGrid";
import Footer from "../components/Footer";
import firebase from "firebase";
import { Box } from "@chakra-ui/core";

class Blog extends Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
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
  };

  render() {
    return (
      <Box width="100%">
        {this.state.currentNav}
        <BlogGrid />
        <Footer />
      </Box>
    );
  }
}

export default Blog;
