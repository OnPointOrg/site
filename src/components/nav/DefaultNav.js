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
  ButtonGroup,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const DefaultNav = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box
      as="header"
      shadow="md"
      fontWeight="bold"
    >
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
              <Link to="/signin">
                <Button size="md" variant="solid">
                  Sign In
                </Button>
              </Link>
              <Divider orientation="vertical" />
              <Link to="/signup">
                <Button size="md" variant="outline">
                  Sign Up
                </Button>
              </Link>
            </Flex>
            <Flex justifyContent="space-between" color="gray.500" px="25px">
              <ThemeButton />
            </Flex>
          </Stack>
        </Box>
      </Stack>
      {/* <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        {...props}
        as="header"
        position="sticky"
        top={0}
        zIndex={1}
        shadow="md"
        fontWeight="bold"
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
            <Menu>
              <ButtonGroup>
                <Link to="/signin">
                  <Button marginRight="20px" size="lg" variant="solid">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline">
                    Sign Up
                  </Button>
                </Link>
              </ButtonGroup>
            </Menu>
            <Divider orientation="vertical" />
            <ThemeButton />
          </Flex>
        </Box>
      </Flex> */}
      <Divider />
    </Box>
  );
};

export default DefaultNav;
