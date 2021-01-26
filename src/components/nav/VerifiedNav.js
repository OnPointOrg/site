import React from 'react';
import { Link } from 'react-router-dom';
import {
   Box,
   Flex,
   Text,
   Menu,
   Heading,
   Image,
   MenuList,
   MenuDivider,
   MenuGroup,
   MenuItem,
   MenuButton,
   useToast,
   Stack,
   Avatar
} from '@chakra-ui/core';
import ThemeButton from './ThemeButton';
import logo from '../../images/logo.png';
import firebase from 'firebase';

import NavLink from './NavLink';

import styled from '@emotion/styled';

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

export const VerifiedNav = (props) => {
   const toast = useToast();
   const email = firebase.auth().currentUser.email;

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
            height="12vh"
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
                     <Flex justifyContent="space-between" color="gray.500">
                        <NavLink name="About" link="about" />
                        <NavLink name="Articles" link="articles" />
                        <Menu closeOnSelect="false" overflow="hidden">
                           <MenuButton
                              mx="25px"
                              transition="all 0.2s"
                              rounded="md"
                              _focus={{
                                 outline: 0,
                                 boxShadow: 'outline'
                              }}
                           >
                              <Avatar
                                 size="sm"
                                 src={`https://unavatar.now.sh/gravatar/${email}`}
                              />
                           </MenuButton>
                           <MenuList>
                              <MenuGroup title="Profile">
                                 <MenuItem isTruncated isDisabled>
                                    <Text>
                                       Email:{' '}
                                       {firebase.auth().currentUser.email}
                                    </Text>
                                 </MenuItem>
                                 <MenuItem isTruncated>
                                    <Text>
                                       Name:{' '}
                                       {firebase.auth().currentUser.displayName}
                                    </Text>
                                 </MenuItem>
                                 <MenuItem>
                                    <Text
                                       onClick={() => {
                                          firebase
                                             .auth()
                                             .sendPasswordResetEmail(email)
                                             .then(() => {
                                                toast({
                                                   title:
                                                      'Password Reset Email Has Been Sent',
                                                   description:
                                                      'In Order To Reset Your Password, Please Check Your Email',
                                                   status: 'success',
                                                   duration: 5000,
                                                   isClosable: true
                                                });
                                             })
                                             .catch(function (e) {
                                                console.log(e);
                                             });
                                       }}
                                    >
                                       Reset Password
                                    </Text>
                                 </MenuItem>
                              </MenuGroup>
                              <MenuDivider />
                              <MenuGroup title="Actions">
                                 <MenuItem>
                                    <Link to="/newstory">New Story</Link>
                                 </MenuItem>
                              </MenuGroup>
                              <MenuDivider />
                              <MenuGroup title="Danger Zone">
                                 <MenuItem
                                    onClick={() => {
                                       firebase
                                          .auth()
                                          .signOut()
                                          .then(() => {
                                             window.location.reload();
                                             console.log('Signed Out');
                                          })
                                          .catch((error) => {
                                             console.log(error);
                                          }) &&
                                          toast({
                                             title: 'Signed Out Successfully',
                                             description:
                                                'You Have Been Signed Out Successfully. Please Note You Will Have To Be Signed In To Access Some Parts Of This Application',
                                             status: 'success',
                                             duration: 5000,
                                             isClosable: true
                                          });
                                    }}
                                 >
                                    Sign Out
                                 </MenuItem>
                              </MenuGroup>
                           </MenuList>
                        </Menu>
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

export default VerifiedNav;
