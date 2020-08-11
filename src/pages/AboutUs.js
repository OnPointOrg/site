import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme, Heading, Link as ChakraLink, Text, Flex, Image, Grid, Box, Button, SimpleGrid } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import teamimg from "../images/team.jpg";

const AboutUs = () => {
    return (
        <ThemeProvider theme={theme}>
            <DefaultNav />
            <Heading textAlign="center" fontSize="100px">👋 Welcome</Heading>
            <br />
            <Heading textAlign="center" fontSize="65px">We Are OnPoint</Heading>
            <SimpleGrid columns={4}>
                <Box width="100%"></Box>
                <Box width="200%">
                    <Image src={teamimg} width="100%" marginTop="50px"></Image>
                </Box>
                <Box width="10%"></Box>
                <Box width="100%"></Box>
            </SimpleGrid>
        </ThemeProvider>
    )
}

export default AboutUs;