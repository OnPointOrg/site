import React from 'react';
import { Link } from 'react-router-dom';
import {
   Box,
   Flex,
   Heading,
   Button,
   Image,
   Stack,
   Text
} from '@chakra-ui/core';
import ThemeButton from './ThemeButton';
import logo from '../../images/logo.png';

import styled from '@emotion/styled';

import NavLink from './NavLink';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const StickyNav = styled(Flex)`
   position: sticky;
   z-index: 10;
   top: 0;
   backdrop-filter: saturate(180%) blur(20px);
   transition: background-color 0.1 ease-in-out;
`;

const DefaultNav = (props) => {
   const bgColor = {
      light: 'rgb(76, 110, 245, 0.8)',
      dark: 'rgb(26, 32, 44, 0.5)'
   };
   const color = { light: 'white', dark: 'gray.800' };
   return (
      <StickyNav bg={bgColor} color={color}>
         <Box
            transition="box-shadow 0.2s"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            as="nav"
         >
            <Stack
               isInline
               justifyContent="space-between"
               alignItems="center"
               py={4}
               display="flex"
            >
               <Box ml="100px">
                  <Flex align="center" ml={5}>
                     <Link to="/">
                        <Heading as="h1" size="xl" letterSpacing={'-.1rem'}>
                           <Image src={logo} width="60px" rounded="full" />
                        </Heading>
                     </Link>
                  </Flex>
               </Box>

               <Box>
                  <Stack isInline alignItems="center" mr="100px">
                     <Flex
                        justifyContent="space-between"
                        color="gray.500"
                        pr="25px"
                     >
                        <NavLink name="About" link="about" />
                        <NavLink name="Articles" link="articles" />
                        <Flex
                           justifyContent="space-between"
                           color="gray.500"
                           ml="15px"
                        >
                           <Link to="/signin">
                              <Button
                                 size="md"
                                 variant="outline"
                                 rounded="full"
                              >
                                 Sign In
                              </Button>
                           </Link>
                           <Text isInline mt="6px" mx="10px">
                              /
                           </Text>
                           <Link to="/signup">
                              <Button
                                 size="md"
                                 variant="outline"
                                 rounded="full"
                              >
                                 Sign Up
                              </Button>
                           </Link>
                        </Flex>
                     </Flex>
                     <Flex justifyContent="space-between" color="gray.500">
                        <ThemeButton />
                     </Flex>
                  </Stack>
               </Box>
            </Stack>
         </Box>
      </StickyNav>
   );
};

export default DefaultNav;
