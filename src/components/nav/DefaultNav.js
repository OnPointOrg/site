import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Button,
  Image,
  Stack,
  Text,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import logo from "../../images/logo.png";

import NavLink from "./NavLink";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const DefaultNav = (props) => {
  return (
    <Box
      as="header"
      fontWeight="bold"
      transition="box-shadow 0.2s"
      left="0"
      right="0"
      borderBottom="6px solid"
      position="fixed"
      top="0"
      width="100%"
      float="left"
      style={{
        background: "rgba(0, 0, 0,0.6)",
        position: "fixed",
        zIndex: "999",
        backdropFilter: "blur(50px) !important",
      }}
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
              <Link to="/signin">
                <Button size="md" variant="solid" rounded="full">
                  Sign In
                </Button>
              </Link>
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
