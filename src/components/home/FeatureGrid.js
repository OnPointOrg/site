import React from 'react';

import { Heading, Box, Text, Grid } from '@chakra-ui/core';

import {
   FaSearch,
   FaPlay,
   FaNewspaper,
   FaComment,
   FaUsers,
   FaCalendar
} from 'react-icons/fa';

import Feature from './Feature';

export const FeatureGrid = () => {
   return (
      <Box
         width="90%"
         display="block"
         mx="auto"
         height="auto"
         align="center"
         justifyContent="center"
      >
         <Box pb="120px">
            <Box maxW="760px" mx="auto" textAlign="center" mb="56px" mt="5rem">
               <Heading as="h2" fontSize="50px" mb="5">
                  Redefine The Media
               </Heading>
               <Text opacity={0.7} fontSize="lg">
                  Well Maybe Not Redefine, But You'll Still Make An Impact
               </Text>
            </Box>
            <Grid
               templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)'
               }}
               gap={10}
               px={{ md: 12 }}
               mx="auto"
               height="auto"
               align="center"
               justifyContent="center"
            >
               <Feature icon={<FaCalendar />} title="Daily Articles">
                  Articles about relevant topics that are concise yet detailed
                  and include visual aids. Crafted for precision.
               </Feature>
               <Feature icon={<FaSearch />} title="Analytic Articles">
                  Long articles containing deep analysis about certain topics
                  such as how sport drafts work or how the electoral college
                  functions.
               </Feature>
               <Feature icon={<FaPlay />} title="Weekly Videos">
                  Weekly videos provide a brief description of the events we
                  covered during the week.
               </Feature>
               <Feature icon={<FaNewspaper />} title="Newsletter">
                  Important articles are sent out every week to users. It is
                  customizable to the user’s preference.
               </Feature>
               <Feature
                  icon={<FaComment />}
                  title="Guest Speakers / Interviews"
               >
                  We will conduct interviews and hold speaker events to further
                  educate the public about specific topics.
               </Feature>
               <Feature icon={<FaUsers />} title="Active Community">
                  We want to use our platform to allow others to provide
                  opportunities that will benefit our community.
               </Feature>
            </Grid>
         </Box>
      </Box>
   );
};

export default FeatureGrid;
