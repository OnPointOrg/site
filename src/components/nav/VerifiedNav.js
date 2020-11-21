import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Divider,
  Menu,
  Heading,
  Button,
  Image,
  Icon,
  MenuList,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuButton,
  useToast,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";
import firebase from "firebase";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const VerifiedNav = (props) => {
  const toast = useToast();
  const email = firebase.auth().currentUser.email;
  return (
    <Box as="header" shadow="md" fontWeight="bold">
      <Stack isInline justifyContent="space-between" alignItems="center" py={4}>
        <Box>
          <Flex align="center" ml={5}>
            <Link to="/">
              <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
                <Image src={logo} width="50px" rounded="full" />
              </Heading>
            </Link>
          </Flex>
        </Box>
        <Box>
          <Stack isInline spacing={4} alignItems="center">
            <Box>
              <Link to="/about">
                <Button variantColor="teal" variant="ghost">
                  <ChakraLink p={4} rounded="md">
                    About
                  </ChakraLink>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/blog">
                <Button variantColor="teal" variant="ghost">
                  <ChakraLink p={4} rounded="md">
                    Blog
                  </ChakraLink>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/contact">
                <Button variantColor="teal" variant="ghost">
                  <ChakraLink p={4} rounded="md">
                    Contact
                  </ChakraLink>
                </Button>
              </Link>
            </Box>
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
                  width="8rem"
                >
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
                        {/* <InputGroup size="md">
                        <Input
                          my="3px"
                          type="text"
                          placeholder={firebase.auth().currentUser.displayName}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            mt="5px"
                            size="sm"
                            onClick={console.log("Working")}
                          >
                            Save
                          </Button>
                        </InputRightElement>
                      </InputGroup> */}
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
