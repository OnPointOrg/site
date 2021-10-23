import {
    Link as ChakraLink,
    IconButton,
    Text,
    Button,
    Stack,
    Icon,
    Box
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            as="footer"
            justifyContent="center"
            borderTopColor="white"
            borderTopWidth="5px"
            display="block"
            overflow="hidden"
        >
            <Stack pt={5} direction="row" justify="center" mt="25px">
                <Link to="/about">
                    <Button variant="ghost" color="white" mx="15px">
                        About
                    </Button>
                </Link>
                <Link to="/articles">
                    <Button variant="ghost" color="white" mx="15px">
                        Articles
                    </Button>
                </Link>
                <Text
                    as="a"
                    textDecor="none"
                    href="mailto:aditya1rawat@gmail.com"
                >
                    <Button variant="ghost" color="white" mx="15px">
                        Contact
                    </Button>
                </Text>
                <Link to="/support">
                    <Button variant="ghost" color="white" mx="15px">
                        Support
                    </Button>
                </Link>
            </Stack>
            <Stack my={2} direction="row" justify="center">
                <ChakraLink
                    href="https://github.com/OnPointOrg"
                    title="GitHub"
                    isExternal
                >
                    <IconButton
                        color="white"
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
                        color="white"
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
                    href="https://www.instagram.com/onpoint_irvine/"
                    title="Instagram"
                    isExternal
                >
                    <IconButton
                        color="white"
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
                        color="white"
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
            <Text
                mt="15px"
                mb="25px"
                fontSize="lg"
                textAlign="center"
                color="white"
            >
                Copyright &copy; {new Date().getFullYear()}. OnPoint News.
            </Text>
            <Text
                mx={3}
                fontSize="xs"
                textAlign="center"
                pb="50px"
                color="white"
            >
                Developed With{' '}
                <span role="img" aria-label="heart">
                    ❤️
                </span>{' '}
                By{' '}
                <ChakraLink
                    href="https://github.com/aditya1rawat"
                    isExternal
                    color="white"
                >
                    Aditya Rawat <Icon name="external-link" mx="2px" />
                </ChakraLink>
            </Text>
        </Box>
    );
};

export default Footer;
