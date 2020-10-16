import React from "react";
import { Link } from "react-router-dom";
import {
  ThemeProvider,
  theme,
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
  // InputGroup,
  // Input,
  // InputRightElement,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";
import firebase from "firebase";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

export const VerifiedNav = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const toast = useToast();
  const email = firebase.auth().currentUser.email;
  return (
    <ThemeProvider theme={newTheme}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Link to="/">
            <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
              <Image src={logo} width="50px" rounded="full" />
            </Heading>
          </Link>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <Text fontSize="xl" mr={6} mt={1.75} display="block">
            <Link to="/about">
              <Button size="lg" variantColor="teal" variant="ghost">
                About
              </Button>
            </Link>
          </Text>
          <Text fontSize="xl" mr={6} mt={1.75} display="block">
            <Link to="/blog">
              <Button size="lg" variantColor="teal" variant="ghost">
                Blog
              </Button>
            </Link>
          </Text>
          <Text fontSize="xl" mr={6} mt={1.75} display="block">
            <Link to="/contact">
              <Button size="lg" variantColor="teal" variant="ghost">
                Contact
              </Button>
            </Link>
          </Text>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
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
            <Divider orientation="vertical" />
            <ThemeButton />
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </ThemeProvider>
  );
};

export default VerifiedNav;
