import React from "react";
import { Box, Divider, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      width="100%"
      mt={"2rem"}
      position="fixed"
    >
      <Divider />
      <Text fontSize="sm">
        Copyright {"\u00A9"} {new Date().getFullYear()} OnPoint
      </Text>
    </Box>
  );
};

export default Footer;
