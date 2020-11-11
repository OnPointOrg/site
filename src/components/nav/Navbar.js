import React from "react";
import { Box, Stack, Link as ChakraLink, Button } from "@chakra-ui/core";
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
              <Button variantColor="teal" variant="ghost">
                <ChakraLink p={4} href="/" rounded="md">
                  Home
                </ChakraLink>
              </Button>
            </Link>
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
                <Link to="/signin">
                  <Button variantColor="teal" variant="ghost">
                    <ChakraLink p={4} rounded="md">
                      Sign In
                    </ChakraLink>
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to="/signup">
                  <Button variantColor="teal" variant="ghost">
                    <ChakraLink p={4} rounded="md">
                      Sign Up
                    </ChakraLink>
                  </Button>
                </Link>
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