import React from "react";
import {
  ThemeProvider,
  Box,
  Flex,
  Link,
  Image,
  Text,
  Stack,
  Avatar,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  IconButton,
  ColorModeProvider,
  useColorMode,
  Icon,
} from "@chakra-ui/core";
import DarkModeLightModeButton from "./DarkModeLightModeButton";

const NavLink = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);

const VerifiedNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ThemeProvider>
      <Box
        // pos={landing ? "absolute" : "fixed"}
        top="0"
        zIndex="4"
        // bg={bg[colorMode]}
        left="0"
        right="0"
        borderBottomWidth="1px"
        width="100%"
        mx="auto"
        px="10px"
      >
        <Box mx="15px" my="10px" w="99%" h="100%">
          <Flex size="100%" align="center" justify="space-between">
            <Box
              minWidth="40px"
              as="a"
              d="block"
              href="/"
              aria-label="Chakra UI, Back to homepage"
            >
              Home
            </Box>
            
            <Flex justifyContent="space-between" color="gray.500">
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  transition="all 0.2s"
                  rounded="md"
                  borderWidth="1px"
                  _focus={{ outline: 0, boxShadow: "outline" }}
                  marginRight="2px"
                >
                  Profile <Icon name="chevron-down" />
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
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
              {/* <MobileNav /> */}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VerifiedNav;
