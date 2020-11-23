import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const DefaultNav = (props) => {
  return (
    <Box
      as="header"
      shadow="md"
      fontWeight="bold"
      position="fixed"
      transition="box-shadow 0.2s"
      top="0"
      opacity="100%"
      width="100%"
      zIndex="1"
      left="0"
      right="0"
    >
      <Stack isInline justifyContent="space-between" alignItems="center" py={4}>
        <Box>
          <Flex align="center" ml={5}>
            <Link to="/">
              <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
                <Image src={logo} width="50px" rounded="full" />
              </Heading>
            </Link>
            <Box ml={10}>
              <Link to="/about">
                <Button variantColor="teal" variant="ghost" rounded="full">
                  <ChakraLink p={4}>About</ChakraLink>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/blog">
                <Button variantColor="teal" variant="ghost" rounded="full">
                  <ChakraLink p={4}>Blog</ChakraLink>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/contact">
                <Button variantColor="teal" variant="ghost" rounded="full">
                  <ChakraLink p={4}>Contact</ChakraLink>
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Stack isInline spacing={4} alignItems="center">
            <Flex justifyContent="space-between" color="gray.500">
              <Link to="/signin">
                <Button size="md" variant="solid" rounded="full">
                  Sign In
                </Button>
              </Link>
              {/* <Divider orientation="vertical" /> */}
              <Text isInline mt="6px" mx="10px">
                /
              </Text>
              <Link to="/signup">
                <Button size="md" variant="outline" rounded="full">
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
    </Box>
  );
};

export default DefaultNav;
