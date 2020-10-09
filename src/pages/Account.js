import React from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import { ThemeProvider } from "@chakra-ui/core";

import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";

const Account = () => {
  return (
    <ThemeProvider>
      <DefaultNav />
      <h1>My Account Page</h1>
    </ThemeProvider>
  );
};

export default Account;
