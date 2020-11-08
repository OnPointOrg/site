import { Flex, Link as ChakraLink, IconButton, Divider } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Divider />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1080px"
        mx="auto"
        p={5}
      >
        <Flex justifyContent="space-between">
          <Link to="/about">
            <ChakraLink
              _hover={{
                textDecoration: "none",
                backgroundColor: "rgba(0,0,0,0.15)",
                borderRadius: ".35rem",
              }}
              mr={[".2rem", "1rem", "1.5rem", "1.5rem"]}
              p={[
                ".4rem .85rem",
                ".5rem 1rem",
                ".75rem 1.25rem",
                ".75rem 1.25rem",
              ]}
              fontSize={[".8rem", ".8rem", "1.1rem", "1.1rem"]}
            >
              About
            </ChakraLink>
          </Link>
          <Link to="/blog">
            <ChakraLink
              _hover={{
                textDecoration: "none",
                backgroundColor: "rgba(0,0,0,0.15)",
                borderRadius: ".35rem",
              }}
              mr={[".2rem", "1rem", "1.5rem", "1.5rem"]}
              p={[
                ".4rem .85rem",
                ".5rem 1rem",
                ".75rem 1.25rem",
                ".75rem 1.25rem",
              ]}
              fontSize={[".8rem", ".8rem", "1.1rem", "1.1rem"]}
            >
              Blog
            </ChakraLink>
          </Link>
          <Link to="/contact">
            <ChakraLink
              _hover={{
                textDecoration: "none",
                backgroundColor: "rgba(0,0,0,0.15)",
                borderRadius: ".35rem",
              }}
              mr={[".2rem", "1rem", "1.5rem", "1.5rem"]}
              p={[
                ".4rem .85rem",
                ".5rem 1rem",
                ".75rem 1.25rem",
                ".75rem 1.25rem",
              ]}
              fontSize={[".8rem", ".8rem", "1.1rem", "1.1rem"]}
            >
              Contact
            </ChakraLink>
          </Link>
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
    </div>
  );
};

export default Footer;
