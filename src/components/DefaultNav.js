import React from "react";
import { Router, Route, Link } from 'react-router-dom';
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
  ButtonGroup
} from "@chakra-ui/core";
import DarkModeLightModeButton from "./DarkModeLightModeButton";
import img from "../images/logo.png";

import SignUp from '../pages/SignUp';

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

const DefaultNav = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
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
          <Link href="/">
              <Heading as="h1" size="xl" letterSpacing={"-.1rem"}>
                <Image src={img} width="50px" alt="Logo"></Image>
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
          <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} mt={1.75} display="block">
            <Link href="/">
              <Button size="lg" variantColor="teal" variant="ghost">
                About
              </Button>
            </Link>
          </Text>
          <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} mt={1.75} display="block">
            <Link href="/">
              <Button size="lg" variantColor="teal" variant="ghost">
                Blog
              </Button>
            </Link>
          </Text>
          <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} mt={1.75} display="block">
            <Link href="/">
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
            <ButtonGroup spacing={4}>
                <Link href="/signup">
                    <Button size="lg" variant="solid">
                        Sign In
                    </Button>
                </Link>
                <Link href="">
                    <Button size="lg" variant="outline">
                        Sign Up
                    </Button>
                </Link>
            </ButtonGroup>
            </Menu>
            <Divider orientation="vertical" />
            <DarkModeLightModeButton />
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </ThemeProvider>
  );
};

export default DefaultNav;