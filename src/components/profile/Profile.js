import React from 'react';
import {
   Box,
   Flex,
   Image,
   Text,
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   Heading,
   Grid,
   Link as ChakraLink,
   IconButton,
   Icon
} from '@chakra-ui/core';
import ArticlePost from '../article/ArticlePost';
import VerifiedNav from '../nav/VerifiedNav';
import DefaultNav from '../nav/DefaultNav';

import { FaEnvelope } from 'react-icons/fa';

export const Profile = () => {
   return (
      <Box>
         <DefaultNav />
         <Flex>
            <Box
               backgroundColor="#25353F"
               width="50%"
               padding="20px"
               height="100%"
            >
               <Image
                  justifyContent="center"
                  mx="auto"
                  size="350px"
                  src="https://unavatar.now.sh/gravatar/aditya1rawat@gmail.com"
               />
               <Heading textAlign="center" my="25px">
                  Aditya Rawat
               </Heading>
               <ChakraLink
                  href="mailto:aditya1rawat@gmail.com"
                  title="Email"
                  color="teal.500"
                  isExternal
               >
                  <Text
                     fontSize="20px"
                     textAlign="center"
                     width="50%"
                     mx="auto"
                  >
                     Email{' '}
                     <IconButton
                        color="gray.500"
                        variant="ghost"
                        aria-label="Email"
                        name="email"
                        fontSize="20px"
                        padding="10px"
                        icon={FaEnvelope}
                     />
                  </Text>
               </ChakraLink>
            </Box>
            <Box width="100%">
               <Tabs isFitted variant="enclosed">
                  <TabList>
                     <Tab>Articles</Tab>
                     <Tab>Liked Articles</Tab>
                  </TabList>

                  <TabPanels>
                     <TabPanel>
                        <Grid
                           templateColumns="repeat(3, 1fr)"
                           gap={6}
                           mb="50px"
                           padding="25px"
                        >
                           <ArticlePost />
                           <ArticlePost />
                           <ArticlePost />
                        </Grid>
                     </TabPanel>
                     <TabPanel>
                        <p>two!</p>
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            </Box>
         </Flex>
      </Box>
   );
};

export default Profile;
