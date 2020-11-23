import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Divider,
  Heading,
  Button,
  Image,
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
            <Box ml={10}>
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
          </Flex>
        </Box>
        <Box>
          <Stack isInline spacing={4} alignItems="center">
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
      <Divider />
    </Box>
  );
};

export default DefaultNav;
