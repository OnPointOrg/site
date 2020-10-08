import React, { Component } from "react";
import DefaultNav from "../components/Nav/DefaultNav";
import VerifiedNav from "../components/Nav/VerifiedNav";
import { ThemeProvider } from "@chakra-ui/core";

export class Dashboard extends Component {
  render() {
    return (
      <ThemeProvider>
        <DefaultNav />
        <h1>This Is The Dashboard</h1>
      </ThemeProvider>
    );
  }
}

export default Dashboard;
