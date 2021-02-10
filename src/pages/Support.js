import React, { useState, useEffect } from 'react';

import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/core';

import paypallogo from '../images/paypallogo.png';
import hcbanklogo from '../images/hcbanklogo.svg';
import Loading from '../components/home/Loading';
import VerifiedNav from '../components/nav/VerifiedNav';
import DefaultNav from '../components/nav/DefaultNav';
import firebase from 'firebase';
import Footer from '../components/Footer';

export const Support = () => {
    const [currentNav, setCurrentNav] = useState(<Loading />);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                setCurrentNav(<VerifiedNav />);
            } else {
                setCurrentNav(<DefaultNav />);
            }
        });
    }, []);

    return (
        <Box>
            {currentNav}
            <Box bg="teal.500" as="section" h={['150vh', '88vh', '88vh']}>
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
                        direction="row"
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
                                my="auto"
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
                            alignSelf="center"
                            as="a"
                            minW="7rem"
                            bg="teal.500"
                            _hover={{
                                backgroundColor: 'teal.800'
                            }}
                            href="https://bank.hackclub.com/donations/start/onpoint"
                            target="_blank"
                            color="white"
                        >
                            <Text color="white">Sponsor</Text>
                        </Button>
                    </Flex>

                    <Flex
                        direction="row"
                        spacing="6"
                        maxW="600px"
                        mx="auto"
                        bg="white"
                        color="gray.800"
                        shadow="md"
                        rounded="lg"
                        p="6"
                        my="6"
                    >
                        <Flex flex="1" isInline spacing="6">
                            <Image
                                h="50px"
                                w="50px"
                                src={paypallogo}
                                mr="20px"
                                my="auto"
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
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Support;
