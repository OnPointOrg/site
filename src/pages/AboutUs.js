import React, { Component } from "react";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import {
  ThemeProvider,
  theme,
  Heading,
  Text,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/core";

import firebase from "firebase";

export class AboutUs extends React.Component {
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
      <ThemeProvider theme={theme}>
        {this.state.currentNav}
        <h1>About Us Page</h1>
      </ThemeProvider>
    );
  }
}

export default AboutUs;
