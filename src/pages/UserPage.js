import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";

import {
  Box,
  Badge,
  Image,
  Icon,
  ThemeProvider,
  ColorModeProvider,
  theme,
  Grid
} from "@chakra-ui/core";

import DefaultNav from "../components/DefaultNav";
import VerifiedNav from "../components/VerifiedNav";

const UserPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <DefaultNav />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default UserPage;
