import {
  Flex,
  Link as ChakraLink,
  IconButton,
  Divider,
  Text,
  Button,
  Stack,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div justifyContent="center">
      <Divider />
      <Stack mt={3} direction="row" justify="center">
        <Link to="/about">
          <Button variant="ghost" mx="25px">About</Button>
        </Link>
        <Link to="/blog">
          <Button variant="ghost" mx="25px">Blog</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost" mx="25px">Contact</Button>
        </Link>
      </Stack>
      <Stack my={5} direction="row" justify="center">
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
            mx="15px"
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
            mx="15px"
            icon={FaEnvelope}
          />
        </ChakraLink>
      </Stack>
      <Text my="25px" textAlign="center">Copyright &copy; 2020. OnPoint News.</Text>
    </div>
  );
};

export default Footer;
