import React from "react";
import { Box, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer" mt={12} textAlign="center">
      <Text fontSize="sm">Copyright</Text>
      <Box mt={4} direction="row" spacing="12px" justify="center">
        Footer
      </Box>
    </Box>
  );
};

export default Footer;
