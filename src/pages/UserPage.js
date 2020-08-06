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
  SimpleGrid,
  Text,
} from "@chakra-ui/core";

import DefaultNav from "../components/DefaultNav";
import VerifiedNav from "../components/VerifiedNav";
import BlogPost from '../components/BlogPost';

const UserPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <DefaultNav />
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
                  <Image
                    margin="25px"
                    marginTop="50px"
                    rounded="full"
                    size="200px"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                  />
                  </SimpleGrid>
                
              </Box>
            </TabPanel>

            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default UserPage;
