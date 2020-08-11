import React from 'react'
import DefaultNav from '../components/DefaultNav';
import VerifiedNav from '../components/VerifiedNav';
import { ThemeProvider, theme, Heading, Link as chakraLink, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const MainHome = () => {
    return (
        <ThemeProvider theme={ theme }>
            <DefaultNav />
            <Heading>👋 Hello</Heading>
            <Heading>We Are OnPoint</Heading>
            <Text>Get Started By <chakraLink><Link to="/signup">Signing Up</Link></chakraLink> or <chakraLink><Link to="/signin">Signing In</Link></chakraLink></Text>
        </ThemeProvider>
    )
}

export default MainHome;