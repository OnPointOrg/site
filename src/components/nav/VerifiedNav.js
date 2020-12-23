import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Menu,
  Heading,
  Image,
  Icon,
  MenuList,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuButton,
  useToast,
  Stack,
  Avatar,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";
import firebase from "firebase";

import NavLink from "./NavLink";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const VerifiedNav = (props) => {
  const toast = useToast();
  const email = firebase.auth().currentUser.email;
  return (
    <Box
      as="header"
      fontWeight="bold"
      transition="box-shadow 0.2s"
      top="0"
      width="100%"
      left="0"
      right="0"
      borderBottom="5px solid"
      borderBottomColor="teal.400"
    >
      <Stack isInline justifyContent="space-between" alignItems="center" py={4}>
        <Box>
          <Flex align="center" ml={5}>
            <Link to="/">
              <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
                <Image src={logo} width="50px" rounded="full" />
              </Heading>
            </Link>
            <NavLink name="About" link="about" />
            <NavLink name="Articles" link="article" />
            <NavLink name="Contact" link="contact" />
          </Flex>
        </Box>
        <Box>
          <Stack isInline spacing={4} alignItems="center">
            <Flex justifyContent="space-between" color="gray.500">
              <Menu closeOnSelect="false">
                <MenuButton
                  px={6}
                  py={2}
                  transition="all 0.2s"
                  rounded="md"
                  borderWidth="1px"
                  _focus={{ outline: 0, boxShadow: "outline" }}
                  marginRight="2px"
                  marginLeft="-2px"
                  // width="8rem"
                >
                  <Avatar
                    marginRight="10px"
                    size="xs"
                    src={`https://unavatar.now.sh/gravatar/${email}`}
                  />{" "}
                  Profile <Icon name="chevron-down" />
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem isTruncated isDisabled>
                      <Text>Email: {firebase.auth().currentUser.email}</Text>
                    </MenuItem>
                    <MenuItem isTruncated>
                      <Text>
                        Name: {firebase.auth().currentUser.displayName}
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
                                title: "Password Reset Email Has Been Sent",
                                description:
                                  "In Order To Reset Your Password, Please Check Your Email",
                                status: "success",
                                duration: 5000,
                                isClosable: true,
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
                      <Link to="newstory">New Story</Link>
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
                            console.log("Signed Out");
                          })
                          .catch((error) => {
                            console.log(error);
                          }) &&
                          toast({
                            title: "Signed Out Successfully",
                            description:
                              "You Have Been Signed Out Successfully. Please Note You Will Have To Be Signed In To Access Some Parts Of This Application",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                          });
                      }}
                    >
                      Sign Out
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
            <Flex justifyContent="space-between" color="gray.500" px="25px">
              <ThemeButton />
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default VerifiedNav;
