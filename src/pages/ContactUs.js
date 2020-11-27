import React, { Component } from "react";
import { Box } from "@chakra-ui/core";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import firebase from "firebase";

export class ContactUs extends Component {
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
      <Box>
        {this.state.currentNav}
        <h1>Contact Us Page</h1>
      </Box>
    );
  }
}

export default ContactUs;
