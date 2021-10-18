import React from 'react';
import {
    Heading,
    Button,
    Link as ChakraLink,
    Box,
    Flex,
    Stack,
    Image
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import { motion } from 'framer-motion';

import GetStarted from '../GetStarted';

import { FaScroll } from 'react-icons/fa';
import FeatureGrid from './FeatureGrid';
import Support from '../../pages/Support';

export const DefaultHome = () => {
    return (
        <Box>
            <Box as="section" width="100%" bg="#000" py="35px">
                <Flex
                    direction="column"
                    align="center"
                    width="90%"
                    display="block"
                    mx="auto"
                    height="100%"
                    justifyContent="center"
                >
                    <Flex align="center" px={8} mb={16}>
                        <Stack spacing={4} height="100%" width="70%">
                            <Heading
                                mt="10px"
                                as="h2"
                                size="xl"
                                fontSize="6rem"
                                fontWeight="bold"
                                width="80%"
                                color="white"
                            >
                                This Is OnPoint.
                            </Heading>

                            <Box
                                mt="10"
                                spacing="3"
                                justify="center"
                                direction="row"
                            >
                                <Link to="/signup">
                                    <Button
                                        h="5rem"
                                        borderRadius="10px"
                                        px="40px"
                                        fontSize="1.2rem"
                                        as="a"
                                        size="lg"
                                        color="white"
                                        variant="outline"
                                        rightIcon={'arrow-forward'}
                                        px="40px"
                                        mr="20px"
                                        mt="25px"
                                        fontSize="1.5rem"
                                        as="a"
                                        size="lg"
                                        bg="black"
                                        rightIcon={'arrow-forward'}
                                        color="white"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                <Link to="/articles">
                                    <Button
                                        as="a"
                                        size="lg"
                                        mt="25px"
                                        h="5rem"
                                        borderRadius="10px"
                                        px="40px"
                                        fontSize="1.5rem"
                                        leftIcon={FaScroll}
                                        bg="black"
                                        color="white"
                                    >
                                        Start Reading
                                    </Button>
                                </Link>
                            </Box>
                            <Box mt={5}>
                                <Link to="/about">
                                    <ChakraLink
                                        fontSize="20px"
                                        textAlign="center"
                                        opacity="0.6"
                                        color="white"
                                    >
                                        Learn More
                                    </ChakraLink>
                                </Link>
                            </Box>
                        </Stack>
                        <Box mb={{ base: 12, md: 0 }}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 0.8 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 180,
                                    damping: 20
                                }}
                                whileHover={{
                                    rotate: 360,
                                    scale: 0.9
                                }}
                            >
                                <Image
                                    src={logo}
                                    size="100%"
                                    rounded="1rem"
                                    shadow="2xl"
                                    ml="30px"
                                />
                            </motion.div>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            <FeatureGrid />

            <Support />

            <GetStarted text="Make your free account to start writing the next big story!" />
        </Box>
    );
};

export default DefaultHome;
