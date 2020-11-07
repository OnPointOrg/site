import { Flex, Link as ChakraLink, IconButton, Text, Icon } from "@chakra-ui/core";
import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      alignItems="center"
      // maxWidth="1080px"
      mx="auto"
      py={5}
    >
      <Flex justifyContent="space-between">
        <Text>
          Copyright © 2020.{" "}
          <ChakraLink color="teal.500" href="https://github.com/OnPointOrg" target="_blank">
            OnPoint News <Icon name="external-link" mx="2px" />
          </ChakraLink>
        </Text>
      </Flex>
      <Flex
        // flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1080px"
        mx="auto"
        p={5}
      >
        <ChakraLink
          href="https://github.com/OnPointOrg"
          title="GitHub"
          isExternal
        >
          <IconButton
            color="gray.500"
            variant="ghost"
            aria-label="Github"
            name="github"
            fontSize="25px"
            size="50px"
            padding="10px"
            icon={FaGithub}
            mr="15px"
          />
        </ChakraLink>
        <ChakraLink
          href="https://twitter.com/aditya1rawat"
          title="Twitter"
          isExternal
        >
          <IconButton
            color="gray.500"
            variant="ghost"
            aria-label="Twitter"
            name="twitter"
            fontSize="25px"
            size="50px"
            padding="10px"
            mx="15px"
            icon={FaTwitter}
          />
        </ChakraLink>
        <ChakraLink
          href="https://www.instagram.com/ad1tya_rawhaaat/"
          title="Instagram"
          isExternal
        >
          <IconButton
            color="gray.500"
            variant="ghost"
            aria-label="Instagram"
            name="instagram"
            fontSize="25px"
            size="50px"
            padding="10px"
            mx="15px"
            icon={FaInstagram}
          />
        </ChakraLink>
        <ChakraLink
          href="mailto:aditya1rawat@gmail.com"
          title="Email"
          isExternal
        >
          <IconButton
            color="gray.500"
            variant="ghost"
            aria-label="Email"
            name="email"
            fontSize="25px"
            size="50px"
            padding="10px"
            mx="25px"
            icon={FaEnvelope}
          />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
