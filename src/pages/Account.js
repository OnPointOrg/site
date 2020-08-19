import React from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import {
  ThemeProvider,
} from "@chakra-ui/core";

import DefaultNav from "../components/DefaultNav";
// import VerifiedNav from "../components/VerifiedNav";
// import BlogPost from '../components/BlogPost';

import BlockQuote from '../components/BlockQuote'

const Account = () => {
  return (
    <ThemeProvider>
      <DefaultNav />
      <h1>My Account Page</h1>
      <BlockQuote />
    </ThemeProvider>
  );
};

export default Account;
