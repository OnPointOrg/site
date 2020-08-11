import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme, Heading, Link as ChakraLink, Text, Flex, Image, Grid, Box, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import img from "../images/logo.png";

const AboutUs = () => {
    return (
        <ThemeProvider theme={theme}>
            <DefaultNav />
            <Heading textAlign="center" fontSize="100px">👋 Welcome</Heading>
            <br />
            <Heading textAlign="center" fontSize="65px">We Are OnPoint</Heading>
        </ThemeProvider>
    )
}

export default AboutUs;