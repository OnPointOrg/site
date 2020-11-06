import React, { FC } from "react";
import {
  Box,
  Stack,
  Link as ChakraLink,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/core";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1}
      shadow="md"
      fontWeight="bold"
    >
      <Box maxW="6xl" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Box>
            <Link href="/">
              <ChakraLink p={4} href="/" rounded="md">
                Home
              </ChakraLink>
            </Link>
          </Box>
          <Box>
            <Stack isInline spacing={4} alignItems="center">
              <Box>
                <Link to="/about">
                  <ChakraLink p={4} rounded="md">
                    About
                  </ChakraLink>
                </Link>
              </Box>
              <Box>
                <Link to="/blog">
                  <ChakraLink p={4} rounded="md">
                    Blog
                  </ChakraLink>
                </Link>
              </Box>
              <Box>
                <Button variantColor="teal" variant="ghost">
                  <Link to="/contact">
                    <ChakraLink p={4} rounded="md">
                      Contact
                    </ChakraLink>
                  </Link>
                </Button>
              </Box>
              <Box px={2}>
                <ThemeButton />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
