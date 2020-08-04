import React from "react";
import {
  ThemeProvider,
  theme,
  Box,
  Flex,
  Link,
  Text,
  Avatar,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Icon,
  Heading,
} from "@chakra-ui/core";
import DarkModeLightModeButton from "./DarkModeLightModeButton";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

const VerifiedNav = (props) => {
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
          <Heading as="h1" size="xl" letterSpacing={"-.1rem"} mr={10}>
            Chakra UI
          </Heading>
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
            <Link href="/">About</Link>
          </Text>
          <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} mt={1.75} display="block">
            <Link href="/">Blog</Link>
          </Text>
          <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} mt={1.75} display="block">
            <Link href="/">Contact</Link>
          </Text>
        </Box>

        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Flex justifyContent="space-between" color="gray.500">
            <Menu>
              <MenuButton
                px={6}
                py={2}
                transition="all 0.2s"
                rounded="md"
                borderWidth="1px"
                _focus={{ outline: 0, boxShadow: "outline" }}
                marginRight="2px"
                marginLeft="-2px"
              >
                  <Avatar marginTop="2px" marginRight="5px" size="xs" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> Profile <Icon name="chevron-down" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Dashboard</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
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

export default VerifiedNav;