import React from "react";

import { ThemeProvider } from "@chakra-ui/core";

import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";

import firebase from "firebase";

export class Account extends React.Component {
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
      <ThemeProvider>
        {this.state.currentNav}
        <h1>My Account Page</h1>
      </ThemeProvider>
    );
  }
}

export default Account;
