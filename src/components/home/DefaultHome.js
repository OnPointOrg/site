import React from 'react';
import {
    Heading,
    Button,
    Link as ChakraLink,
    Box,
    Flex,
    Stack,
    Image,
    Text
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import paypallogo from '../../images/paypallogo.png';
import hcbanklogo from '../../images/hcbanklogo.svg';
import { motion } from 'framer-motion';

import GetStarted from '../GetStarted';

import { FaScroll } from 'react-icons/fa';
import FeatureGrid from './FeatureGrid';

export const DefaultHome = () => {
    return (
        <Box>
            <Box as="section" width="100%" bg="#285E61" py="35px">
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
                            <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                fontSize="3rem"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                width="70%"
                            >
                                We're Changing The Way You See Media Forever
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
                                        mr="20px"
                                        mt="25px"
                                        fontSize="1.5rem"
                                        as="a"
                                        size="lg"
                                        bg="teal.900"
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
                                        bg="teal.500"
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
                        <Box
                            w={{ base: '80%', sm: '60%', md: '50%' }}
                            mb={{ base: 12, md: 0 }}
                        >
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

            <Box bg="teal.500" as="section">
                <Box py="120px" px="32px" color="white">
                    <Box mx="auto" textAlign="center" mb="56px" width="75%">
                        <Heading as="h2" fontSize="50px" mb="5">
                            Support OnPoint
                        </Heading>
                        <Text fontSize="lg" opacity={0.7}>
                            To keep your experience a satisfying and memorable
                            one, we will graciously accept donations to fund our
                            operations to continue
                        </Text>
                    </Box>

                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        spacing="6"
                        maxW="600px"
                        mx="auto"
                        bg="white"
                        color="gray.800"
                        shadow="md"
                        rounded="lg"
                        p="6"
                    >
                        <Flex flex="1" isInline spacing="6">
                            <Image
                                h="50px"
                                w="50px"
                                src={hcbanklogo}
                                mr="20px"
                                mt="1px"
                            />
                            <Box flex="1">
                                <Text fontSize="lg" fontWeight="bold" mt="-1">
                                    Hack Club Bank
                                </Text>
                                <Text opacity={0.7}>
                                    Support Us So We Can Continue To Grow
                                </Text>
                            </Box>
                        </Flex>
                        <Button
                            w={{ base: '100%', md: 'auto' }}
                            alignSelf="center"
                            as="a"
                            minW="7rem"
                            bg="teal.500"
                            _hover={{
                                backgroundColor: 'teal.800'
                            }}
                            href="#"
                            target="_blank"
                            color="white"
                        >
                            <Text color="white">Sponsor</Text>
                        </Button>
                    </Flex>

                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        spacing="6"
                        maxW="600px"
                        mx="auto"
                        bg="white"
                        color="gray.800"
                        shadow="md"
                        rounded="lg"
                        p="6"
                        mt="6"
                    >
                        <Flex flex="1" isInline spacing="6">
                            <Image
                                h="50px"
                                w="50px"
                                src={paypallogo}
                                mr="20px"
                                mt="1px"
                            />
                            <Box flex="1">
                                <Text fontSize="lg" fontWeight="bold" mt="-1">
                                    PayPal
                                </Text>
                                <Text opacity={0.7}>
                                    Support The Developer, Aditya Rawat.
                                </Text>
                            </Box>
                        </Flex>
                        <Button
                            w={{ base: '100%', md: 'auto' }}
                            alignSelf="center"
                            as="a"
                            minW="7rem"
                            bg="teal.500"
                            _hover={{
                                backgroundColor: 'teal.800'
                            }}
                            href="#"
                            target="_blank"
                            color="white"
                        >
                            <Text color="white">Sponsor</Text>
                        </Button>
                    </Flex>

                    <Box maxW="600px" mx="auto" textAlign="center">
                        <Text textStyle="caps" mb="8" mt="4rem">
                            Sponsors{' '}
                            <span role="img" aria-label="emoji building">
                                🏦
                            </span>
                        </Text>
                        <Flex justify="center">
                            <Box>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <ChakraLink
                                        href="https://hackclub.com"
                                        target="_blank"
                                        _hover=""
                                    >
                                        <Image
                                            w="56px"
                                            h="56px"
                                            alt={'alt'}
                                            src={
                                                'https://assets.hackclub.com/icon-rounded.png'
                                            }
                                            loading="lazy"
                                        />
                                    </ChakraLink>
                                </motion.div>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            <GetStarted text="Make your free account to start writing the next big story!" />
        </Box>
    );
};

export default DefaultHome;
