import React from "react";
import { Box, Divider, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer" textAlign="center">
      <Divider />
      <Text mt="1.25rem" fontSize="sm">
        Copyright {"\u00A9"} {new Date().getFullYear()} OnPoint
      </Text>
    </Box>
  );
};

export default Footer;
